<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import TrustBadges from '$lib/components/TrustBadges.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import { homeSeo, COMPANY } from '$lib/seo';

  const services = [
    {
      title: 'Land Clearing & Brush Removal',
      description: 'Lot clearing, brush removal, and tree work to make your land buildable, usable, or just easier to maintain.',
      icon: 'development',
      link: '/services/land-clearing-brush-removal',
      features: ['Lot Clearing', 'Brush Removal', 'Tree Removal', 'Fence-line Clearing']
    },
    {
      title: 'Dirt Work & Grading',
      description: 'Driveways, building pads, drainage lines, and yard grading. We get the dirt where it needs to go.',
      icon: 'grading',
      link: '/services/dirt-work-grading',
      features: ['Gravel Driveways', 'Building Pads', 'Drainage Lines', 'Yard Grading']
    },
    {
      title: 'Foundation Preparation',
      description: 'Footer digging and foundation prep for new homes, additions, garages, and outbuildings.',
      icon: 'excavation',
      link: '/services/foundation-prep',
      features: ['Footer Digging', 'Building Pads', 'Grade Control', 'Site Staging']
    },
    {
      title: 'Stump Removal',
      description: 'Clean stump removal so you can re-grade, replant, or build without surprises.',
      icon: 'demolition',
      link: '/services/stump-removal',
      features: ['Single Stumps', 'Whole-lot Cleanup', 'Root Ball Extraction', 'Free Estimates']
    },
    {
      title: 'Property & Land Management',
      description: 'Ongoing property care — driveways, drainage, brush control — for landowners who want their land kept in shape.',
      icon: 'development',
      link: '/services/property-management',
      features: ['Lot Maintenance', 'Brush Control', 'Driveway Upkeep', 'Seasonal Service']
    }
  ];

  const homeSections = [
    {
      icon: '📍',
      title: 'Locally Owned',
      description: 'Based in Rickman, TN and serving the Upper Cumberland — you talk directly to the owner on every job.'
    },
    {
      icon: '✅',
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured so you can hire with confidence on residential or commercial work.'
    },
    {
      icon: '💲',
      title: 'Free Estimates',
      description: 'Call or text 931-644-6180 for a free, no-pressure estimate on your land or excavation project.'
    },
    {
      icon: '🔨',
      title: 'Quality Work Guaranteed',
      description: 'We do the job right the first time — footers, grading, driveways, and clearing finished clean.'
    }
  ];
</script>

<svelte:head>
  <title>{homeSeo.title}</title>
  <meta name="description" content={homeSeo.description} />
  <meta name="keywords" content={homeSeo.keywords.join(', ')} />
  <link rel="canonical" href="https://www.randallexcavation.com" />
</svelte:head>

<Hero
  title="Excavation & Land Management in the Upper Cumberland"
  subtitle="Locally owned and operated out of Rickman, TN. Licensed and insured. Land clearing, dirt work, foundation prep, stump removal, and property management — done right."
  ctaText="Get a Free Estimate"
  ctaLink="/request-quote"
  secondaryCtaText="Call 931-644-6180"
  secondaryCtaLink="tel:9316446180"
/>

<TrustBadges />

<!-- Services Section -->
<section class="py-16 md:py-24 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="text-center mb-12 animate-on-scroll">
      <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
        OUR SERVICES
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">
        All Things Land Management & Construction
      </h2>
      <p class="text-dark-400 dark:text-dark-300 max-w-2xl mx-auto">
        From clearing a fresh lot to digging a footer and laying a clean gravel driveway, we handle the dirt work that gets your project moving.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each services as service, i}
        <div class="animate-on-scroll">
          <ServiceCard
            {...service}
            delay={i * 100}
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Why Choose Us -->
<section class="py-16 md:py-24 bg-dark-50 dark:bg-dark-800">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="text-center mb-12 animate-on-scroll">
      <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
        WHY CHOOSE US
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">
        Local. Licensed. Honest Work.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each homeSections as section, i}
        <div class="text-center animate-on-scroll" style="transition-delay: {i * 100}ms">
          <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
            {section.icon}
          </div>
          <h3 class="text-xl font-heading font-bold text-dark-900 dark:text-white mb-2">
            {section.title}
          </h3>
          <p class="text-dark-400 dark:text-dark-300">
            {section.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16 md:py-24 bg-dark-50 dark:bg-dark-800">
  <div class="max-w-3xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="text-center mb-12 animate-on-scroll">
      <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
        FAQ
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">
        Frequently Asked Questions
      </h2>
    </div>

    <div class="space-y-4">
      {#each [
        { q: 'What areas do you serve?', a: 'We are based in Rickman, TN and serve the Upper Cumberland — including Cookeville, Livingston, Algood, Monterey, Sparta, Crossville, Jamestown, Byrdstown, and the surrounding 50-mile radius.' },
        { q: 'Are you licensed and insured?', a: 'Yes — fully licensed and insured for residential and commercial work.' },
        { q: 'What kinds of jobs do you take on?', a: 'Land clearing and brush removal, dirt work and grading (driveways, pads, drainage), foundation prep and footer digging, stump removal, and ongoing property and land management.' },
        { q: 'Do you give free estimates?', a: 'Yes. Call or text 931-644-6180 or email randallconstruction25@gmail.com and we\u2019ll come look at the job.' },
        { q: 'How quickly can you start?', a: 'It depends on weather and the current schedule. Reach out and we\u2019ll let you know our soonest available date.' }
      ] as faq}
        <details class="group animate-on-scroll">
          <summary class="flex items-center justify-between cursor-pointer p-6 bg-white dark:bg-dark-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 class="font-heading font-semibold text-dark-900 dark:text-white pr-4">
              {faq.q}
            </h3>
            <svg class="w-5 h-5 text-dark-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div class="px-6 pb-6 text-dark-500 dark:text-dark-400 leading-relaxed">
            {faq.a}
          </div>
        </details>
      {/each}
    </div>
  </div>
</section>

<CTA
  title="Ready to Get Started?"
  description="Call or text for a free estimate on your land or excavation project. We work across the Upper Cumberland and respond quickly."
  ctaText="Request a Free Estimate"
  ctaLink="/request-quote"
  secondaryCtaText="Call 931-644-6180"
  secondaryCtaLink="tel:9316446180"
/>

<style>
  section {
    scroll-margin-top: 80px;
  }
</style>
