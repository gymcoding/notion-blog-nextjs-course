'use client';
import Giscus from '@giscus/react';

export default function GiscusComments() {
  return (
    <Giscus
      repo="gymcoding/notion-blog-nextjs-giscus"
      repoId="R_kgDOOHw4QQ"
      category="Announcements"
      categoryId="DIC_kwDOOHw4Qc4Cn9v2"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="ko"
    />
  );
}
