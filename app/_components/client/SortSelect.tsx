'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortSelect() {
  console.log('SortSelect');

  console.log('NEXT_PUBLIC_CLIENT: ', process.env.NEXT_PUBLIC_CLIENT);
  console.log('CLIENT: ', process.env.CLIENT);

  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get('sort') || 'latest';

  const handleSort = (value: string) => {
    console.log('value: ', value);

    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);

    router.push(`?${params.toString()}`);
  };

  return (
    <Select value={sort} onValueChange={handleSort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 방식 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="latest">최신순</SelectItem>
        <SelectItem value="oldest">오래된순</SelectItem>
      </SelectContent>
    </Select>
  );
}
