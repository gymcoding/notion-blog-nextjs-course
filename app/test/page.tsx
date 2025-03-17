interface Post {
  id: string;
  title: string;
}

// export const dynamic = 'force-dynamic';

export const revalidate = 3600; // 페이지를 1시간마다 재검증

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = (await data.json()) as Post[];
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
