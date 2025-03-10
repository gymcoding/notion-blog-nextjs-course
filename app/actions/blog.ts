'use server';

import { createPost } from '@/lib/notion';

export async function createPostAction(formData: FormData) {
  const title = formData.get('title') as string;
  const tag = formData.get('tag') as string;
  const content = formData.get('content') as string;

  await createPost({ title, tag, content });
  console.log('포스트 생성 완료');
}
