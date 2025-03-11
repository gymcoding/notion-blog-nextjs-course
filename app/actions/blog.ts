'use server';

import { createPost } from '@/lib/notion';

export async function createPostAction(formData: FormData) {
  // const title = formData.get('title') as string;
  // const tag = formData.get('tag') as string;
  // const content = formData.get('content') as string;

  const { title, tag, content } = Object.fromEntries(formData);

  await createPost({
    title: String(title),
    tag: String(tag),
    content: String(content),
  });
}
