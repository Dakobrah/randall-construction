<script lang="ts">
  import { FadeIn, SlideUp } from 'svelte/transition';

  export let title: string = 'Ready to Start Your Project?';
  export let description: string = 'Get a free site estimate from our experienced team. We respond within 24 hours.';
  export let ctaText: string = 'Get a Free Estimate';
  export let ctaLink: string = '/request-quote';
  export let secondaryCtaText?: string = 'Call Us Now';
  export let secondaryCtaLink?: string = 'tel:5551234567';
  export let variant?: 'default' | 'dark' | 'gradient' = 'default';
  export let showForm?: boolean = false;
</script>

<section class="py-16 md:py-24 {variant === 'dark' ? 'bg-dark-800' : variant === 'gradient' ? 'bg-gradient-to-br from-primary-500 to-primary-700' : 'bg-primary-50 dark:bg-dark-800'}">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="text-center max-w-3xl mx-auto">
      <FadeIn duration={400}>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 {variant === 'dark' ? 'text-white' : 'text-dark-900 dark:text-white'}">
          {title}
        </h2>
      </FadeIn>
      <FadeIn duration={400} transition={{ delay: 100 }}>
        <p class="text-lg mb-8 {variant === 'dark' ? 'text-dark-200' : 'text-dark-500 dark:text-dark-300'}">
          {description}
        </p>
      </FadeIn>
      <FadeIn duration={400} transition={{ delay: 200 }}>
        <div class="flex flex-wrap justify-center gap-4">
          <a href={ctaLink} class="btn-primary bg-primary-500 hover:bg-primary-600 text-lg px-8 py-4" aria-label={ctaText}>
            {ctaText}
          </a>
          {#if secondaryCtaText && secondaryCtaLink}
            <a href={secondaryCtaLink} 
               class="btn-secondary text-lg px-8 py-4 {variant === 'dark' ? 'border-white text-white hover:bg-white hover:text-dark-900' : 'border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark-900'}"
               aria-label={secondaryCtaText}>
              {secondaryCtaText}
            </a>
          {/if}
        </div>
      </FadeIn>
    </div>
  </div>
</section>
