import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface TableOfContentsItem {
  id: string;
  title: string;
  items?: TableOfContentsItem[];
}

const mockTableOfContents: TableOfContentsItem[] = [
  {
    id: 'intro',
    title: '소개',
    items: [],
  },
  {
    id: 'getting-started',
    title: '시작하기',
    items: [
      {
        id: 'prerequisites',
        title: '사전 준비사항',
        items: [
          {
            id: 'node-installation',
            title: 'Node.js 설치',
          },
          {
            id: 'npm-setup',
            title: 'NPM 설정',
          },
        ],
      },
      {
        id: 'project-setup',
        title: '프로젝트 설정',
        items: [
          {
            id: 'create-project',
            title: '프로젝트 생성',
          },
          {
            id: 'folder-structure',
            title: '폴더 구조',
          },
        ],
      },
    ],
  },
  {
    id: 'shadcn-ui-setup',
    title: 'Shadcn UI 설정하기',
    items: [
      {
        id: 'installation',
        title: '설치 방법',
        items: [
          {
            id: 'cli-installation',
            title: 'CLI 도구 설치',
          },
          {
            id: 'component-setup',
            title: '컴포넌트 설정',
          },
        ],
      },
      {
        id: 'configuration',
        title: '환경 설정',
        items: [
          {
            id: 'theme-setup',
            title: '테마 설정',
          },
          {
            id: 'typography',
            title: '타이포그래피',
          },
        ],
      },
    ],
  },
];

function TableOfContentsLink({ item }: { item: TableOfContentsItem }) {
  return (
    <div className="space-y-2">
      <Link
        key={item.id}
        href={`#${item.id}`}
        className={`hover:text-foreground text-muted-foreground block font-medium transition-colors`}
      >
        {item.title}
      </Link>
      {item.items && item.items.length > 0 && (
        <div className="space-y-2 pl-4">
          {item.items.map((subItem) => (
            <TableOfContentsLink key={subItem.id} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BlogPost() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-[240px_1fr_240px] gap-8">
        <aside>{/* 추후 콘텐츠 추가 */}</aside>
        <section>
          {/* 블로그 헤더 */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Badge>프론트엔드</Badge>
              <h1 className="text-4xl font-bold">Next.js와 Shadcn UI로 블로그 만들기</h1>
            </div>

            {/* 메타 정보 */}
            <div className="text-muted-foreground flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>홍길동</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>2024년 3월 15일</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5분 읽기</span>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* 블로그 본문 */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="lead">
              Next.js와 Shadcn UI를 사용하여 모던하고 아름다운 블로그를 만드는 방법을
              알아보겠습니다. 이 튜토리얼에서는 기본적인 설정부터 배포까지 전 과정을 다룹니다.
            </p>

            <h2>시작하기</h2>
            <p>
              Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 서버 사이드 렌더링, 정적 사이트
              생성 등 다양한 렌더링 전략을 제공하며, 개발자 경험을 극대화시켜주는 여러 기능들을
              제공합니다.
            </p>

            <h2>Shadcn UI 설정하기</h2>
            <p>
              Shadcn UI는 재사용 가능한 컴포넌트 모음으로, 아름다운 디자인과 접근성을 모두 갖추고
              있습니다. 컴포넌트를 직접 소유할 수 있어 커스터마이징이 자유롭다는 장점이 있습니다.
            </p>
            <p className="lead">
              Next.js와 Shadcn UI를 사용하여 모던하고 아름다운 블로그를 만드는 방법을
              알아보겠습니다. 이 튜토리얼에서는 기본적인 설정부터 배포까지 전 과정을 다룹니다.
            </p>

            <h2>시작하기</h2>
            <p>
              Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 서버 사이드 렌더링, 정적 사이트
              생성 등 다양한 렌더링 전략을 제공하며, 개발자 경험을 극대화시켜주는 여러 기능들을
              제공합니다.
            </p>

            <h2>Shadcn UI 설정하기</h2>
            <p>
              Shadcn UI는 재사용 가능한 컴포넌트 모음으로, 아름다운 디자인과 접근성을 모두 갖추고
              있습니다. 컴포넌트를 직접 소유할 수 있어 커스터마이징이 자유롭다는 장점이 있습니다.
            </p>
            <p className="lead">
              Next.js와 Shadcn UI를 사용하여 모던하고 아름다운 블로그를 만드는 방법을
              알아보겠습니다. 이 튜토리얼에서는 기본적인 설정부터 배포까지 전 과정을 다룹니다.
            </p>

            <h2>시작하기</h2>
            <p>
              Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 서버 사이드 렌더링, 정적 사이트
              생성 등 다양한 렌더링 전략을 제공하며, 개발자 경험을 극대화시켜주는 여러 기능들을
              제공합니다.
            </p>

            <h2>Shadcn UI 설정하기</h2>
            <p>
              Shadcn UI는 재사용 가능한 컴포넌트 모음으로, 아름다운 디자인과 접근성을 모두 갖추고
              있습니다. 컴포넌트를 직접 소유할 수 있어 커스터마이징이 자유롭다는 장점이 있습니다.
            </p>
            <p className="lead">
              Next.js와 Shadcn UI를 사용하여 모던하고 아름다운 블로그를 만드는 방법을
              알아보겠습니다. 이 튜토리얼에서는 기본적인 설정부터 배포까지 전 과정을 다룹니다.
            </p>

            <h2>시작하기</h2>
            <p>
              Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 서버 사이드 렌더링, 정적 사이트
              생성 등 다양한 렌더링 전략을 제공하며, 개발자 경험을 극대화시켜주는 여러 기능들을
              제공합니다.
            </p>

            <h2>Shadcn UI 설정하기</h2>
            <p>
              Shadcn UI는 재사용 가능한 컴포넌트 모음으로, 아름다운 디자인과 접근성을 모두 갖추고
              있습니다. 컴포넌트를 직접 소유할 수 있어 커스터마이징이 자유롭다는 장점이 있습니다.
            </p>
            <p className="lead">
              Next.js와 Shadcn UI를 사용하여 모던하고 아름다운 블로그를 만드는 방법을
              알아보겠습니다. 이 튜토리얼에서는 기본적인 설정부터 배포까지 전 과정을 다룹니다.
            </p>

            <h2>시작하기</h2>
            <p>
              Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 서버 사이드 렌더링, 정적 사이트
              생성 등 다양한 렌더링 전략을 제공하며, 개발자 경험을 극대화시켜주는 여러 기능들을
              제공합니다.
            </p>

            <h2>Shadcn UI 설정하기</h2>
            <p>
              Shadcn UI는 재사용 가능한 컴포넌트 모음으로, 아름다운 디자인과 접근성을 모두 갖추고
              있습니다. 컴포넌트를 직접 소유할 수 있어 커스터마이징이 자유롭다는 장점이 있습니다.
            </p>
            <p className="lead">
              Next.js와 Shadcn UI를 사용하여 모던하고 아름다운 블로그를 만드는 방법을
              알아보겠습니다. 이 튜토리얼에서는 기본적인 설정부터 배포까지 전 과정을 다룹니다.
            </p>

            <h2>시작하기</h2>
            <p>
              Next.js는 React 기반의 풀스택 웹 프레임워크입니다. 서버 사이드 렌더링, 정적 사이트
              생성 등 다양한 렌더링 전략을 제공하며, 개발자 경험을 극대화시켜주는 여러 기능들을
              제공합니다.
            </p>

            <h2>Shadcn UI 설정하기</h2>
            <p>
              Shadcn UI는 재사용 가능한 컴포넌트 모음으로, 아름다운 디자인과 접근성을 모두 갖추고
              있습니다. 컴포넌트를 직접 소유할 수 있어 커스터마이징이 자유롭다는 장점이 있습니다.
            </p>
          </div>

          <Separator className="my-16" />

          {/* 이전/다음 포스트 네비게이션 */}
          <nav className="grid grid-cols-2 gap-8">
            <Link href="/blog/previous-post">
              <Card className="group hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base font-medium">
                    <ChevronLeft className="h-4 w-4" />
                    <span>시작하기</span>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Next.js를 시작하는 방법부터 프로젝트 구조, 기본 설정까지 상세히 알아봅니다.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/blog/next-post" className="text-right">
              <Card className="group hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-end gap-2 text-base font-medium">
                    <span>심화 가이드</span>
                    <ChevronRight className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Next.js의 고급 기능들을 활용하여 더 나은 웹 애플리케이션을 만드는 방법을
                    소개합니다.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </nav>
        </section>
        <aside>
          <div>
            <div className="bg-muted/60 space-y-4 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">목차</h3>
              <nav className="space-y-3 text-sm">
                {mockTableOfContents.map((item) => (
                  <TableOfContentsLink key={item.id} item={item} />
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
