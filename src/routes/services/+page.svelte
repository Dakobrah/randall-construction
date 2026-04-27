<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import { getServiceJsonLd, SERVICE_AREAS } from '$lib/seo';

  // Data provided by +page.server.ts
  export let data: {
    services: Array<any>;
    processSteps: Array<any>;
    seo: { title: string; description: string; canonical?: string };
  };

  const { services, processSteps, seo } = data;
</script>

<svelte:head>
  <title>{seo?.title ?? 'Our Services | Randall Excavation'}</title>
  <meta name="description" content={seo?.description ?? ''} />
  {#if seo?.canonical}
    <link rel="canonical" href={seo.canonical} />
  {/if}
</svelte:head>

<Hero
  title="Our Services"
  subtitle="Land clearing, dirt work, foundation prep, stump removal, and property management across the Upper Cumberland — Rickman, Cookeville, Livingston, and surrounding towns."
  ctaText="Request a Quote"
  ctaLink="/request-quote"
  secondaryCtaText="Call 931-644-6180"
  secondaryCtaLink="tel:9316446180"
/>

<!-- Services Grid -->
<section class="py-16 md:py-24 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each services as service, i}
        <ServiceCard
          {...service}
          delay={i * 100}
          class="animate-on-scroll"
        />
      {/each}
    </div>
  </div>
</section>

<!-- Our Process -->
<section class="py-16 md:py-24 bg-dark-50 dark:bg-dark-800">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="text-center mb-16 animate-on-scroll">
      <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
        OUR PROCESS
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">
        How We Work
      </h2>
      <p class="text-dark-400 dark:text-dark-300 max-w-2xl mx-auto">
        From initial consultation to project completion, we ensure transparency and excellence at every step.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each processSteps as process, i}
        <div class="relative text-center animate-on-scroll" style="transition-delay: {i * 100}ms">
          <div class="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center text-2xl font-heading font-bold text-white mx-auto mb-6 shadow-lg shadow-primary-500/30">
            {process.step}
          </div>
          {#if i < processSteps.length - 1}
            <div class="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary-200 dark:bg-primary-800"></div>
          {/if}
          <h3 class="text-xl font-heading font-bold text-dark-900 dark:text-white mb-3">
            {process.title}
          </h3>
          <p class="text-dark-400 dark:text-dark-300">
            {process.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Service Areas -->
<section class="py-16 md:py-24 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
          SERVICE AREA
        </span>
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-dark-900 dark:text-white mb-6">
          Serving the Upper Cumberland
        </h2>
        <p class="text-dark-400 dark:text-dark-300 mb-8 leading-relaxed">
          Based in Rickman, TN, we work across the Upper Cumberland and the surrounding 50-mile radius. Local roots mean we can respond quickly and stay engaged with your project from start to finish.
        </p>
        <div class="grid grid-cols-2 gap-4 mb-8">
          {#each SERVICE_AREAS as city}
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-dark-600 dark:text-dark-300">{city}, TN</span>
            </div>
          {/each}
        </div>
        <a href="/request-quote" class="btn-primary">
          Check If We Serve Your Area
        </a>
      </div>
      <div class="bg-dark-100 dark:bg-dark-700 rounded-2xl p-8 h-96 flex items-center justify-center">
        <div class="text-center">
          <svg class="w-24 h-24 mx-auto text-primary-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 11a3 3 0 116 0 3 3 0 01-6 0z" />
          </svg>
          <p class="text-dark-400 dark:text-dark-400 font-semibold">Service Area</p>
          <p class="text-dark-400 dark:text-dark-400 text-sm mt-2">50-mile radius from Rickman, TN</p>
        </div>
      </div>
    </div>
  </div>
</section>

<CTA
  title="Need a Custom Solution?"
  description="Every project is unique. Contact us to discuss your specific requirements and get a tailored proposal."
  ctaText="Get Custom Quote"
  ctaLink="/request-quote"
/>
