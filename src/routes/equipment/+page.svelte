<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import CTA from '$lib/components/CTA.svelte';

  const equipment = [
    {
      name: 'Bobcat E45 Mini Excavator',
      image: '/images/equipment/equipment-1.jpg',
      description:
        'A versatile compact excavator we use for footer digging, drainage lines, stump removal, and tight-access dirt work where a full-size machine can\u2019t reach.',
      uses: ['Footer & foundation digging', 'Drainage lines', 'Stump & root removal', 'Tight-access excavation']
    },
    {
      name: 'John Deere 317G Compact Track Loader',
      image: '/images/equipment/equipment-2.jpg',
      description:
        'A rubber-track skid steer that handles brush clearing, grading, building pads, gravel spreading, and material moving with low ground pressure.',
      uses: ['Land clearing & brush removal', 'Grading & building pads', 'Gravel driveways', 'Site cleanup']
    }
  ];

  const gallery = [
    { src: '/images/dirt-work/dirt-work-1.jpg', alt: 'Dirt work and grading project', tag: 'Dirt Work' },
    { src: '/images/dirt-work/dirt-work-2.jpg', alt: 'Building pad and grading work', tag: 'Dirt Work' },
    { src: '/images/dirt-work/dirt-work-3.jpg', alt: 'Driveway and dirt work', tag: 'Dirt Work' },
    { src: '/images/dirt-work/dirt-work-4.jpg', alt: 'Grading and site work', tag: 'Dirt Work' },
    { src: '/images/dirt-work/dirt-work-5.jpg', alt: 'Dirt work jobsite', tag: 'Dirt Work' },
    { src: '/images/drainage/drainage-1.jpg', alt: 'Drainage line installation', tag: 'Drainage' },
    { src: '/images/drainage/drainage-2.jpg', alt: 'New drainage trench', tag: 'Drainage' },
    { src: '/images/drainage/drainage-3.jpg', alt: 'Completed drainage work', tag: 'Drainage' },
    { src: '/images/tree-clearing/tree-clearing-1.jpg', alt: 'Tree clearing work', tag: 'Tree Clearing' },
    { src: '/images/tree-clearing/tree-clearing-2.jpg', alt: 'Land clearing project', tag: 'Tree Clearing' },
    { src: '/images/tree-clearing/tree-clearing-3.jpg', alt: 'Brush and tree clearing', tag: 'Tree Clearing' },
    { src: '/images/tree-clearing/tree-clearing-4.jpg', alt: 'Cleared lot ready for use', tag: 'Tree Clearing' },
    { src: '/images/stump-removal/stump-removal-1.jpg', alt: 'Stump removal job', tag: 'Stump Removal' }
  ];

  const seo = {
    title: 'Equipment & Fleet | Randall Excavation — Rickman, TN',
    description:
      'See the equipment we use for land clearing, dirt work, and excavation across the Upper Cumberland — Bobcat E45 mini excavator and John Deere 317G compact track loader. Additional equipment available by rental as the job requires.',
    canonical: 'https://www.randallexcavation.com/equipment'
  };
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <link rel="canonical" href={seo.canonical} />
</svelte:head>

<Hero
  title="Our Equipment"
  subtitle="The machines that get the dirt moving — owned, maintained, and run by us. When a project calls for something bigger or more specialized, we bring in the right rental so the job still gets done right."
  ctaText="Request a Quote"
  ctaLink="/request-quote"
  secondaryCtaText="Call 931-644-6180"
  secondaryCtaLink="tel:9316446180"
  backgroundImage="/images/equipment/equipment-1.jpg"
/>

<!-- Owned Equipment -->
<section class="py-16 md:py-24 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="text-center mb-12 animate-on-scroll">
      <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
        OUR FLEET
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">
        Equipment We Own & Operate
      </h2>
      <p class="text-dark-400 dark:text-dark-300 max-w-2xl mx-auto">
        Our day-to-day fleet handles the bulk of what we do — land clearing, grading, footer work, and drainage.
      </p>
    </div>

    <div class="flex justify-center mb-10 md:mb-12 animate-on-scroll">
      <div class="w-full max-w-2xl aspect-[4/3] overflow-hidden rounded-2xl bg-dark-100 dark:bg-dark-700 shadow-sm">
        <img
          src="/images/equipment/equipment-1.jpg"
          alt="Randall Excavation equipment on site"
          loading="lazy"
          decoding="async"
          width="1600"
          height="1200"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
    </div>

    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
      {#each equipment as item, i}
        <li class="bg-dark-50 dark:bg-dark-800 rounded-xl p-6 md:p-7 shadow-sm animate-on-scroll" style="transition-delay: {i * 100}ms">
          <div class="flex items-start gap-3 mb-3">
            <svg class="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <h3 class="text-xl md:text-2xl font-heading font-bold text-dark-900 dark:text-white">
              {item.name}
            </h3>
          </div>
          <p class="text-dark-500 dark:text-dark-300 mb-4 leading-relaxed">
            {item.description}
          </p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {#each item.uses as use}
              <li class="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300">
                <svg class="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {use}
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Additional Equipment / Rentals Note -->
<section class="py-12 md:py-16 bg-dark-50 dark:bg-dark-800">
  <div class="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="bg-white dark:bg-dark-700 rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-primary-500 animate-on-scroll">
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg class="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl md:text-3xl font-heading font-bold text-dark-900 dark:text-white mb-3">
            Need a bigger machine? We rent in.
          </h2>
          <p class="text-dark-500 dark:text-dark-300 leading-relaxed">
            Some jobs call for more than what we keep on the trailer — bulldozers, full-size excavators, dump trucks, forestry mulchers, or specialty attachments. When that\u2019s the case, we bring in the right additional equipment by rental so the work gets done efficiently without you having to source it. Just let us know what you\u2019re trying to accomplish and we\u2019ll line up the gear that fits.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Project Gallery -->
<section class="py-16 md:py-24 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="text-center mb-12 animate-on-scroll">
      <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
        EQUIPMENT IN ACTION
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">
        Recent Work Across the Upper Cumberland
      </h2>
      <p class="text-dark-400 dark:text-dark-300 max-w-2xl mx-auto">
        Photos from real jobsites — dirt work, drainage, tree clearing, and stump removal.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {#each gallery as photo, i}
        <figure class="group relative overflow-hidden rounded-xl bg-dark-100 dark:bg-dark-800 aspect-[4/3] animate-on-scroll" style="transition-delay: {(i % 6) * 75}ms">
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
            width="1200"
            height="900"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <span class="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
              {photo.tag}
            </span>
          </figcaption>
        </figure>
      {/each}
    </div>
  </div>
</section>

<CTA
  title="Have a Job in Mind?"
  description="Tell us what you\u2019re working on. If our fleet can\u2019t handle it alone, we\u2019ll bring in the right equipment to finish the job."
  ctaText="Request a Free Estimate"
  ctaLink="/request-quote"
  secondaryCtaText="Call 931-644-6180"
  secondaryCtaLink="tel:9316446180"
/>
