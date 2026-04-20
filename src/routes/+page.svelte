<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import TrustBadges from '$lib/components/TrustBadges.svelte';
  import ProjectGallery from '$lib/components/ProjectGallery.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import { homeSeo } from '$lib/seo';

  const services = [
    {
      title: 'Residential Excavation',
      description: 'Expert lot preparation, foundation digging, and basement excavation for custom homes and subdivisions.',
      icon: 'excavation',
      link: '/services/residential-excavation',
      features: ['Lot Preparation', 'Foundation Digging', 'Basement Excavation', 'Rock Removal']
    },
    {
      title: 'Commercial Site Development',
      description: 'Complete site prep for commercial builders and developers. Phased excavation with minimal project disruption.',
      icon: 'development',
      link: '/services/commercial-site-development',
      features: ['Site Planning', 'Mass Excavation', 'Utility Rough-in', 'Stormwater Management']
    },
    {
      title: 'Foundation Preparation',
      description: 'Precision foundation excavation with exact grade control. Fast turnaround for residential and commercial builds.',
      icon: 'excavation',
      link: '/services/foundation-prep',
      features: ['Grade Control', 'Precision Digging', 'Inspection Ready', 'Fast Turnaround']
    },
    {
      title: 'Grading & Drainage',
      description: 'Professional grading, slope stabilization, and drainage solutions for chronic water management issues.',
      icon: 'grading',
      link: '/services/grading-drainage',
      features: ['Slope Grading', 'French Drains', 'Stormwater Systems', 'Erosion Control']
    },
    {
      title: 'Demolition & Hauling',
      description: 'Safe structural demolition, concrete removal, and debris hauling with proper disposal and recycling.',
      icon: 'demolition',
      link: '/services/demolition-hauling',
      features: ['Structural Demo', 'Concrete Removal', 'Debris Hauling', 'Site Clearance']
    },
    {
      title: 'Land Clearing',
      description: 'Complete land clearing for development, agriculture, or personal use. Tree removal and stump grinding included.',
      icon: 'development',
      link: '/services/land-clearing',
      features: ['Tree Removal', 'Stump Grinding', 'Brush Clearing', 'Root Removal']
    }
  ];

  const homeSections = [
    {
      icon: '🏠',
      title: 'For Homeowners',
      description: 'From custom home foundations to basement excavation, we bring precision and care to every residential project.'
    },
    {
      icon: '🏢',
      title: 'For Developers',
      description: 'Trusted by commercial and residential developers. On-time, on-budget, and ready for inspection every time.'
    },
    {
      icon: '🚜',
      title: 'Modern Fleet',
      description: '25+ pieces of well-maintained equipment including excavators, bulldozers, graders, and dump trucks.'
    },
    {
      icon: '📋',
      title: 'Permit Support',
      description: 'We handle excavation permits, utility locates, and coordinate with local authorities for smooth project flow.'
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
  title="Professional Excavation & Site Development"
  subtitle="Trusted by residential and commercial developers for over 20 years. Licensed, insured, and committed to excellence on every project."
  ctaText="Get a Free Site Estimate"
  ctaLink="/request-quote"
  secondaryCtaText="View Our Projects"
  secondaryCtaLink="/projects"
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
        Complete Site Development Solutions
      </h2>
      <p class="text-dark-400 dark:text-dark-300 max-w-2xl mx-auto">
        From initial site prep to final grading, we deliver precision excavation services that keep your project on track.
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
        Built on Trust, Driven by Results
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

<!-- Projects Preview -->
<ProjectGallery />

<!-- Testimonials -->
<section class="py-16 md:py-24 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="text-center mb-12 animate-on-scroll">
      <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
        TESTIMONIALS
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">
        What Our Clients Say
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each [
        { name: 'Mike Thompson', role: 'Homebuilder', text: 'Randall Construction delivered our foundation on time and under budget. Their attention to detail and communication was outstanding.', rating: 5 },
        { name: 'Sarah Chen', role: 'Commercial Developer', text: 'We have used Randall for multiple commercial projects. Their fleet, crew, and professionalism are unmatched in the region.', rating: 5 },
        { name: 'David Rodriguez', role: 'Property Manager', text: 'They handled our complex drainage issue with expertise. The team was professional, clean, and completed the work ahead of schedule.', rating: 5 }
      ] as testimonial}
        <div class="card p-6 md:p-8 animate-on-scroll">
          <div class="flex gap-1 mb-4">
            {#each Array(testimonial.rating) as _}
              <svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            {/each}
          </div>
          <p class="text-dark-500 dark:text-dark-400 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
              {testimonial.name[0]}
            </div>
            <div>
              <p class="font-semibold text-dark-900 dark:text-white">{testimonial.name}</p>
              <p class="text-sm text-dark-400 dark:text-dark-400">{testimonial.role}</p>
            </div>
          </div>
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
        { q: 'What areas do you serve?', a: 'We serve Springfield, Columbus, Champaign, Peoria, Naperville, and a 50+ mile radius throughout central Illinois.' },
        { q: 'Do you handle permits?', a: 'Yes, we assist with all excavation permits, utility locates, and coordinate with local authorities throughout the process.' },
        { q: 'How quickly can you start a project?', a: 'For emergency work, we can often start within 24-48 hours. For planned projects, we typically schedule within 1-2 weeks.' },
        { q: 'What types of projects do you handle?', a: 'We handle residential excavation, commercial site development, foundation prep, grading, drainage, demolition, and land clearing.' },
        { q: 'Are you licensed and insured?', a: 'Yes, we are a licensed General Contractor (GC-12345), OSHA certified, and carry $2M liability coverage with workers comp.' }
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
  title="Ready to Start Your Project?"
  description="Get a free site estimate from our experienced team. We respond within 24 hours with a detailed proposal."
  ctaText="Get a Free Estimate"
  ctaLink="/request-quote"
  secondaryCtaText="Call Us Now"
  secondaryCtaLink="tel:5551234567"
/>

<style>
  section {
    scroll-margin-top: 80px;
  }
</style>
