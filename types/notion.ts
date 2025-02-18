export interface NotionTag {
  id: string;
  name: string;
  count: number;
}

export interface NotionPost {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  tags?: NotionTag[];
  author?: string;
  date?: string;
}
