<script lang="ts">
  export let badges: Array<{
    icon: string;
    title: string;
    description: string;
  }> = [
    {
      icon: '🏆',
      title: 'Licensed & Certified',
      description: 'GC-12345 | OSHA 30-Hour Certified | Fully bonded'
    },
    {
      icon: '🛡️',
      title: 'Fully Insured',
      description: '$2M liability coverage | Workers comp included'
    },
    {
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: '98% on-time project completion rate'
    },
    {
      icon: '🚜',
      title: 'Modern Fleet',
      description: '25+ pieces of well-maintained equipment'
    },
    {
      icon: '📋',
      title: 'Permit Assistance',
      description: 'We handle all excavation permits & inspections'
    },
    {
      icon: '⭐',
      title: '5-Star Rated',
      description: '4.9/5 average from 200+ client reviews'
    }
  ];
</script>

<section class="py-12 bg-dark-50 dark:bg-dark-800 border-y border-gray-100 dark:border-dark-700">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8" role="list">
        {#each badges as badge, i}
          <li class="flex flex-col items-center text-center group" role="listitem">
            <div class="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-dark-700 rounded-xl shadow-sm flex items-center justify-center text-2xl md:text-3xl mb-3 group-hover:scale-110 group-hover:shadow-md transition-all" aria-hidden="true">
              {badge.icon}
            </div>
            <h4 class="font-heading font-semibold text-dark-900 dark:text-white text-sm md:text-base mb-1">
              {badge.title}
            </h4>
            <p class="text-dark-400 dark:text-dark-400 text-xs md:text-sm">
              {badge.description}
            </p>
          </li>
        {/each}
      </ul>
  </div>
</section>
