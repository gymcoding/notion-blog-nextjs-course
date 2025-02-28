'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
export default function SortSelect() {
  console.log('SortSelect');
  return (
    <Select defaultValue="latest">
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
