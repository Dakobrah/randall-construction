import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extension: '.mdx',
  layout: {
    service: './src/lib/content/layouts/service.mdx',
    blog: './src/lib/content/layouts/blog.mdx',
    project: './src/lib/content/layouts/project.mdx'
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.mdx'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
    files: {
      assets: 'static',
      lib: 'src/lib',
      routes: 'src/routes',
      params: 'src/params'
    },
    paths: {
      relative: false
    }
  }
};

export default config;
