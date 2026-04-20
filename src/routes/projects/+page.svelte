<script lang="ts">
  import ProjectGallery from '$lib/components/ProjectGallery.svelte';
  import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
  <title>Projects | Randall Excavation</title>
  <meta name="description" content="Browse Randall Excavation's portfolio of residential and commercial excavation, grading, and demolition projects." />
</svelte:head>

<section class="py-16 px-4 max-w-7xl mx-auto text-center">
  <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">Portfolio</span>
  <h1 class="text-4xl md:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">Our Projects</h1>
  <p class="text-lg text-dark-500 dark:text-dark-300 max-w-2xl mx-auto">See the work we've completed for residential and commercial clients across Illinois.</p>
</section>

<ProjectGallery />
<CTA />
