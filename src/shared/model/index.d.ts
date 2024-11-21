export interface Track {
  name: string;
  artist: { '#text': string };
  image: Array<{ '#text': string }>;
  '@attr'?: { nowplaying: boolean };
  repeatCount?: number;
}

export interface MessageData {
  text?: string;
  userAgent?: string;
  ip?: string;
}

export interface UserRingData {
  prev: {
    id: number;
    name: string;
    url: string;
    favicon?: string | null;
  };
  curr: {
    id: number;
    name: string;
    url: string;
    favicon?: string | null;
  };
  next: {
    id: number;
    name: string;
    url: string;
    favicon?: string | null;
  };
}