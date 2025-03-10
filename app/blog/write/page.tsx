import { PostForm } from '@/components/features/blog/PostForm';
import { createPostAction } from '@/app/actions/blog';

export default function WritePage() {
  return (
    <div className="container py-10">
      <PostForm createPostAction={createPostAction} />
    </div>
  );
}
