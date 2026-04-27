<script lang="ts">
  import { SERVICE_AREAS } from '$lib/seo';
</script>

<svelte:head>
  <title>Service Areas | Randall Excavation — Upper Cumberland TN</title>
  <meta name="description" content="Randall Excavation serves Rickman, Cookeville, Livingston, Algood, Monterey, Sparta, Crossville, Jamestown, Byrdstown and the surrounding 50-mile radius." />
</svelte:head>

<section class="py-24 px-4 max-w-4xl mx-auto">
  <div class="text-center mb-10">
    <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-6">Coverage</span>
    <h1 class="text-4xl md:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-6">Where We Work</h1>
    <p class="text-lg text-dark-500 dark:text-dark-300 max-w-2xl mx-auto">
      Based in Rickman, TN. We serve the Upper Cumberland and the surrounding 50-mile radius. If you don’t see your town listed below, give us a call — we may still be able to help.
    </p>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
    {#each SERVICE_AREAS as city}
      <div class="flex items-center gap-2 text-dark-700 dark:text-dark-200">
        <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span>{city}, TN</span>
      </div>
    {/each}
  </div>

  <div class="text-center flex flex-wrap gap-4 justify-center">
    <a href="/request-quote" class="btn-primary text-lg px-8 py-4">Check Your Area</a>
    <a href="tel:9316446180" class="btn-secondary text-lg px-8 py-4">Call 931-644-6180</a>
  </div>
</section>
