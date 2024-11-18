export interface Track {
  name: string;
  artist: { '#text': string };
  image: Array<{ '#text': string }>;
  '@attr'?: { nowplaying: boolean };
  repeatCount?: number;
}

interface MessageData {
  text?: string;
  userAgent?: string;
  ip?: string;
}

interface Project {
  id: number;
  name?: string;
  link?: Url;
  description?: string;
  descriptionRu?: string;
  createdAt?: Date;
  screenshot: string
}

interface Social {
  id?: number;
  link?: string;
  name?: string;
  icon?: string;
}

interface Tool {
  id?: number;
  name?: string;
  icon?: string;
  category?: string;
}