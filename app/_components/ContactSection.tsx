import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, BookOpen, HandshakeIcon } from 'lucide-react';

const contactItems = [
  {
    icon: Megaphone,
    title: 'Advertising and Collaboration',
    description: 'Brand Promotion, Content Creation, Collaboration Proposal',
    mailto: {
      email: 'bruce.lean17@gmail.com',
      subject: '[Advertising/Collaboration] Proposal',
      body: 'Brand/Product Name:\nProposal Content:\nPeriod:\nBudget:',
    },
  },
  {
    icon: BookOpen,
    title: 'Lecture Inquiry',
    description: 'Technical Lecture, Workshop, Seminar',
    mailto: {
      email: 'bruce.lean17@gmail.com',
      subject: '[Lecture] Inquiry',
      body: 'Lecture Topic:\nExpected Number of Participants:\nPreferred Date:\nInquiry Content:',
    },
  },
  {
    icon: HandshakeIcon,
    title: 'Other Inquiry',
    description: 'Recruitment, Interview, Other Collaboration Proposal',
    mailto: {
      email: 'bruce.lean17@gmail.com',
      subject: '[Other] Inquiry',
      body: 'Inquiry Type:\nInquiry Content:',
    },
  },
];
export default function ContactSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={`mailto:${item.mailto.email}?subject=${encodeURIComponent(
                item.mailto.subject
              )}&body=${encodeURIComponent(item.mailto.body)}`}
              className="group bg-primary/5 hover:bg-muted flex items-start gap-4 rounded-lg p-3 transition-colors"
            >
              <div className="bg-primary/20 text-primary flex shrink-0 items-center justify-center rounded-md p-1.5">
                <item.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
