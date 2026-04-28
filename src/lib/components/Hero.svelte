<script lang="ts">
  export let title: string = 'Excavation & Land Management in the Upper Cumberland';
  export let subtitle: string = 'Locally owned and operated out of Rickman, TN. Licensed and insured. Land clearing, dirt work, foundation prep, stump removal, and property management — done right.';
  export let ctaText: string = 'Get a Free Estimate';
  export let ctaLink: string = '/request-quote';
  export let secondaryCtaText: string | undefined = 'Call 931-644-6180';
  export let secondaryCtaLink: string | undefined = 'tel:9316446180';
  export let backgroundImage: string | undefined = '/images/dirt-work/dirt-work-1.jpg';
  export let imageAlt: string = '';
</script>

<section class="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0" aria-hidden="true">
    {#if backgroundImage}
      <img src={backgroundImage}
           alt={imageAlt}
           class="w-full h-full object-cover"
           loading="eager"
           decoding="async"
           fetchpriority="high"
           width="1920"
           height="1080" />
    {:else}
      <div class="w-full h-full bg-gradient-to-br from-dark-900 via-dark-700 to-dark-800"></div>
    {/if}
    <!-- Layered overlays for readable text on any photo -->
    <div class="absolute inset-0 bg-black/55"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
  </div>

  <!-- Animated particles/shapes -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden" aria-hidden="true">
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1.5s"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 py-20 md:py-28 lg:py-32">
    <div class="max-w-3xl">
      <div class="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary-500/25 border border-primary-400/40 rounded-full mb-6">
        <span class="w-2 h-2 bg-primary-400 rounded-full animate-pulse motion-reduce:animate-none" aria-hidden="true"></span>
        <span class="text-primary-100 text-sm font-medium">Available for New Projects</span>
      </div>

      <div class="animate-on-scroll">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6 hero-title-shadow">
          {title}
          <span class="block text-primary-300">Built Right</span>
        </h1>
      </div>

      <div class="animate-on-scroll">
        <p class="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed hero-subtitle-shadow">
          {subtitle}
        </p>
      </div>

      <div class="animate-on-scroll flex flex-wrap gap-3 sm:gap-4">
        <a href={ctaLink}
           class="btn-primary bg-primary-500 hover:bg-primary-600 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg shadow-primary-500/30">
          {ctaText}
          <svg class="w-5 h-5 ml-2" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        {#if secondaryCtaText && secondaryCtaLink}
          <a href={secondaryCtaLink}
             class="btn-secondary border-2 border-white text-white hover:bg-white hover:text-dark-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            {secondaryCtaText}
          </a>
        {/if}
      </div>

      <!-- Trust indicators -->
      <div class="animate-on-scroll grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-6 lg:gap-8 mt-10 md:mt-12 pt-8 border-t border-white/15">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary-500/25 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <svg class="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p class="text-white font-semibold">Licensed & Insured</p>
            <p class="text-gray-200 text-sm">Residential & commercial</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary-500/25 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <svg class="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p class="text-white font-semibold">Rickman, TN</p>
            <p class="text-gray-200 text-sm">Serving the Upper Cumberland</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary-500/25 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <svg class="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p class="text-white font-semibold">Free Estimates</p>
            <p class="text-gray-200 text-sm">Call or text 931-644-6180</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none hidden sm:block" aria-hidden="true">
    <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>

<style>
  .hero-title-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4);
  }
  .hero-subtitle-shadow {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  }
</style>
