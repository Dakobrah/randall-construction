Content conventions and editor guide for Randell Construction

Overview
--------
This folder contains MDsveX content used across the site. Each service, project, and blog post is stored under `src/lib/content`.

Service files
-------------
- Location: `src/lib/content/services/*.mdx`
- Required exported metadata (top of file):
  ```js
  export const metadata = {
    title: 'Residential Excavation',
    slug: 'residential-excavation',
    description: 'Short summary used on listings',
    icon: 'excavation',
    features: ['Lot prep', 'Foundation digging']
  }
  ```
- Each `.mdx` file should be authored in Markdown. The `service.mdx` layout is used automatically by the page listing loader and provides standard header/feature rendering.

Blog posts
----------
- Location: `src/lib/content/blog/*.mdx`
- Recommended metadata:
  ```js
  export const metadata = {
    title: 'How to Prepare Your Lot',
    date: '2026-04-01',
    description: 'What to expect when prepping your lot for excavation',
    tags: ['excavation','guide']
  }
  ```

Projects
--------
- Location: `src/lib/content/projects/*.mdx`
- Use `metadata.specs` to provide a list of key/value pairs.

Preview & local editing
-----------------------
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. MDsveX layouts live under `src/lib/content/layouts` (service.mdx, blog.mdx, project.mdx). Edit these to update global content styling.

Publishing content
------------------
- Content files are picked up at build time using `import.meta.glob` (see `src/routes/services/+page.server.ts`).
- To add a new service, create the `.mdx` file and use a unique `slug`. The sitemap and services listing will include it automatically.
