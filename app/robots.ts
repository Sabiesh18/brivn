import { MetadataRoute } from 'next'

// Replace with your actual domain when deploying
const SITE_URL = 'https://brivn.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
