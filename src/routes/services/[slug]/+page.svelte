<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  // eager: true bundles all MDX components synchronously — no onMount needed
  const modules = import.meta.glob('/src/lib/content/services/*.mdx', { eager: true }) as Record<string, any>;

  $: Component = modules[`/src/lib/content/services/${data.slug}.mdx`]?.default ?? null;
</script>

{#if Component}
  <svelte:component this={Component} />
{:else}
  <div class="max-w-4xl mx-auto py-24 px-4 text-center">
    <h1 class="text-3xl font-heading font-bold text-dark-900 dark:text-white mb-4">Service Not Found</h1>
    <a href="/services" class="btn-primary">View All Services</a>
  </div>
{/if}
