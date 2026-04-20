<script lang="ts">
  export let title: string = '';
  export let description: string = '';
  export let icon: string = '🏗️';
  export let image: string | undefined = '';
  export let link: string = '/services';
  export let linkText: string = 'Learn More';
  export let features: string[] = [];
  export let delay: number = 0;

  const iconMap: Record<string, string> = {
    'excavation': '⛏️',
    'grading': '📐',
    'demolition': '🏚️',
    'drainage': '💧',
    'hauling': '🚛',
    'development': '🏗️'
  };
</script>

<div class="animate-on-scroll h-full" style="animation-delay: {delay}ms">
  <a href={link}
    class="group card p-6 md:p-8 h-full flex flex-col hover:border-primary-500/50 transition-all duration-300"
    aria-label={`Learn more about ${title}`}>
    <!-- Icon/Image -->
    {#if image}
      <div class="w-full h-48 mb-6 overflow-hidden rounded-lg">
        <img src={image} alt={title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width="400" height="192" />
      </div>
    {:else}
      <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
        {iconMap[icon.toLowerCase()] || icon}
      </div>
    {/if}

    <!-- Content -->
    <h3 class="text-xl md:text-2xl font-heading font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
      {title}
    </h3>
    <p class="text-dark-400 dark:text-dark-300 mb-4 flex-grow">
      {description}
    </p>

    <!-- Features list -->
    {#if features.length}
      <ul class="space-y-2 mb-6" aria-label="Features list">
        {#each features as feature}
          <li class="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400">
            <svg class="w-4 h-4 text-primary-500 flex-shrink-0" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            {feature}
          </li>
        {/each}
      </ul>
    {/if}

    <!-- Link -->
    <div class="flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all">
      {linkText}
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </a>
</div>
