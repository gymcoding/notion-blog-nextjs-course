export interface NotionTag {
  id: string;
  name: string;
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
