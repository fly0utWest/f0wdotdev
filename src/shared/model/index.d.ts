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
   name?: string,
   html_url?: Url
   description?: string,
   pushed_at?: string
}