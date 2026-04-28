import { COMPANY } from '$lib/seo';

const BASE = COMPANY.url.replace(/\/$/, '');

const staticRoutes = ['/', '/services', '/equipment', '/service-areas', '/about', '/request-quote'];

function formatUrl(path: string) {
  return `${BASE}${path.startsWith('/') ? '' : '/'}${path}`;
}

function buildSitemap(serviceSlugs: string[]) {
  const urls: string[] = [];

  for (const route of staticRoutes) {
    urls.push(`
    <url>
      <loc>${formatUrl(route)}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`);
  }

  for (const slug of serviceSlugs) {
    urls.push(`
    <url>
      <loc>${formatUrl(`/services/${slug}`)}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n')}
  </urlset>`;
}

export async function GET() {
  let serviceSlugs: string[] = [];

  try {
    const modules = import.meta.glob('/src/lib/content/services/*.mdx', { eager: true }) as Record<string, any>;
    serviceSlugs = Object.values(modules).map((m: any) => (m.metadata || m.frontmatter || {}).slug).filter(Boolean);
  } catch (e) {
    serviceSlugs = ['foundation-prep', 'land-clearing-brush-removal', 'dirt-work-grading', 'stump-removal', 'property-management'];
  }

  const body = buildSitemap(serviceSlugs);
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
