import { Client } from '@notionhq/client';
import type { Post } from '@/types/blog';
import type {
  PageObjectResponse,
  PersonUserObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPublishedPosts = async (): Promise<Post[]> => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  console.log(response.results);

  return response.results
    .filter((page): page is PageObjectResponse => 'properties' in page)
    .map((page) => {
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
        title:
          properties.Title.type === 'title' ? (properties.Title.title[0]?.plain_text ?? '') : '',
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
    });
};
