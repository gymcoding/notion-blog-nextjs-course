import { Card } from '@/components/ui/card';

const stats = [
  {
    title: '총 게시물',
    value: '156',
    change: '+12%',
    changeType: 'positive',
  },
  {
    title: '총 조회수',
    value: '32,485',
    change: '+24%',
    changeType: 'positive',
  },
  {
    title: '평균 체류시간',
    value: '2분 45초',
    change: '+8%',
    changeType: 'positive',
  },
  {
    title: '구독자 수',
    value: '1,234',
    change: '+15%',
    changeType: 'positive',
  },
];

export default function StatsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">블로그 통계</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-4">
            <div className="text-muted-foreground text-sm">{stat.title}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div
              className={`text-sm ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
