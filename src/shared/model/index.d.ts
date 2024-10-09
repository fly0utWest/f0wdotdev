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
  html_url?: Url;
  description?: string;
  pushed_at?: string;
}
