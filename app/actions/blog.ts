'use server';

import { createPost } from '@/lib/notion';
import { z } from 'zod';
import { revalidateTag } from 'next/cache';
import { getPublishedPosts } from '@/lib/notion';

const postSchema = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  tag: z.string().min(1, { message: '태그를 선택해주세요.' }),
  content: z.string().min(1, { message: '내용은 최소 10자 이상 입력해주세요.' }),
});

export interface PostFormData {
  title: string;
  tag: string;
  content: string;
}

export interface PostFormState {
  message: string;
  errors?: {
    title?: string[];
    tag?: string[];
    content?: string[];
  };
  formData?: PostFormData;
  success?: boolean;
}
export async function createPostAction(prevState: PostFormState, formData: FormData) {
  // const title = formData.get('title') as string;
  // const tag = formData.get('tag') as string;
  // const content = formData.get('content') as string;

  // const { title, tag, content } = Object.fromEntries(formData);

  const rawFormData = {
    title: formData.get('title') as string,
    tag: formData.get('tag') as string,
    content: formData.get('content') as string,
  };

  const validatedFields = postSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '유효성 검사에 실패했습니다.',
      formData: rawFormData,
    };
  }
  try {
    const { title, tag, content } = validatedFields.data;

    await createPost({
      title: title,
      tag: tag,
      content: content,
    });
    revalidateTag('posts');
    return {
      success: true,
      message: '블로그 포스트가 성공적으로 생성되었습니다.',
    };
  } catch (err) {
    console.error(err);
    return {
      message: '블로그 포스트 생성에 실패했습니다.',
      formData: rawFormData,
    };
  }
  // revalidatePath('/');
  // redirect('/');
}

export async function getPosts(
  tag?: string,
  sort?: string,
  startCursor?: string,
  pageSize?: number
) {
  const posts = await getPublishedPosts({ tag, sort, startCursor, pageSize });
  return posts;
}
