import { COMPANY } from '$lib/seo';

const BASE = COMPANY.url.replace(/\/$/, '');

const staticRoutes = ['/', '/services', '/request-quote', '/projects'];

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
    serviceSlugs = ['residential-excavation', 'commercial-site-development', 'foundation-prep', 'grading-drainage', 'demolition-hauling', 'land-clearing'];
  }

  const body = buildSitemap(serviceSlugs);
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
