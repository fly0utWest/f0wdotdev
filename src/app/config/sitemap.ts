import { MetadataRoute } from 'next';
import { canonicalUrl } from '@/shared/config';

export function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${canonicalUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${canonicalUrl}/about`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
