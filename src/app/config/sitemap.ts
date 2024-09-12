import { MetadataRoute } from 'next';
import { env } from 'process';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.CANONICAL_URL}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${process.env.CANONICAL_URL}/about`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
