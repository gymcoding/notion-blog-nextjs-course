import { Client } from '@notionhq/client';
import type { Post, TagFilterItem } from '@/types/blog';
import type {
  PageObjectResponse,
  PersonUserObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

function getPostMetadata(page: PageObjectResponse): Post {
  const { properties } = page;

  const getCoverImage = (cover: PageObjectResponse['cover']) => {
    if (!cover) return '';

    switch (cover.type) {
      case 'external':
        return cover.external.url;
      case 'file':
        return cover.file.url;
      default:
        return '';
    }
  };

  return {
    id: page.id,
    title: properties.Title.type === 'title' ? (properties.Title.title[0]?.plain_text ?? '') : '',
    description:
      properties.Description.type === 'rich_text'
        ? (properties.Description.rich_text[0]?.plain_text ?? '')
        : '',
    coverImage: getCoverImage(page.cover),
    tags:
      properties.Tags.type === 'multi_select'
        ? properties.Tags.multi_select.map((tag) => tag.name)
        : [],
    author:
      properties.Author.type === 'people'
        ? ((properties.Author.people[0] as PersonUserObjectResponse)?.name ?? '')
        : '',
    date: properties.Date.type === 'date' ? (properties.Date.date?.start ?? '') : '',
    modifiedDate: page.last_edited_time,
    slug:
      properties.Slug.type === 'rich_text'
        ? (properties.Slug.rich_text[0]?.plain_text ?? page.id)
        : page.id,
  };
}

export const getPostBySlug = async (
  slug: string
): Promise<{
  markdown: string;
  post: Post;
}> => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: 'Slug',
          rich_text: {
            equals: slug,
          },
        },
        {
          property: 'Status',
          select: {
            equals: 'Published',
          },
        },
      ],
    },
  });

  return {
    markdown: '',
    post: getPostMetadata(response.results[0] as PageObjectResponse),
  };

  // return getPageMetadata(response);
};

export const getPublishedPosts = async (tag?: string): Promise<Post[]> => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'Published',
          },
        },
        ...(tag && tag !== '전체'
          ? [
              {
                property: 'Tags',
                multi_select: {
                  contains: tag,
                },
              },
            ]
          : []),
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return response.results
    .filter((page): page is PageObjectResponse => 'properties' in page)
    .map(getPostMetadata);
};

export const getTags = async (): Promise<TagFilterItem[]> => {
  const posts = await getPublishedPosts();

  // 모든 태그를 추출하고 각 태그의 출현 횟수를 계산
  const tagCount = posts.reduce(
    (acc, post) => {
      post.tags?.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>
  );

  // TagFilterItem 형식으로 변환
  const tags: TagFilterItem[] = Object.entries(tagCount).map(([name, count]) => ({
    id: name,
    name,
    count,
  }));

  // "전체" 태그 추가
  tags.unshift({
    id: 'all',
    name: '전체',
    count: posts.length,
  });

  // 태그 이름 기준으로 정렬 ("전체" 태그는 항상 첫 번째에 위치하도록 제외)
  const [allTag, ...restTags] = tags;
  const sortedTags = restTags.sort((a, b) => a.name.localeCompare(b.name));

  return [allTag, ...sortedTags];
};
