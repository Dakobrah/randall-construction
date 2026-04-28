<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';

  let mobileMenuOpen = false;
  let scrolled = false;

  $: themeValue = $theme;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 50; };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/equipment', label: 'Equipment' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/about', label: 'About' }
  ];
</script>

<nav aria-label="Primary Navigation"
  class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark-800/90 backdrop-blur-md border-b border-gray-200 dark:border-dark-600 transition-all duration-300"
  class:shadow-md={scrolled}>
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <div class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 group" aria-label="Randall Excavation Home">
        <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div class="hidden sm:block">
          <span class="text-xl font-heading font-bold text-dark-900 dark:text-white">Randall</span>
          <span class="text-xl font-heading font-bold text-primary-500"> Excavation</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <a href={link.href}
             class="text-dark-600 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors relative group"
             aria-label={link.label}>
            {link.label}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
          </a>
        {/each}
      </div>

      <!-- Right side actions -->
      <div class="flex items-center gap-4">
        <!-- Theme Toggle -->
        <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                on:click={() => theme.toggle()}
                aria-label="Toggle theme">
          {#if themeValue === 'light'}
            <svg class="w-5 h-5 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {:else}
            <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {/if}
        </button>

        <!-- CTA Button (Desktop) -->
        <a href="tel:9316446180"
           class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all shadow-md hover:shadow-lg">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (931) 644-6180
        </a>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
          on:click={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu">
          {#if mobileMenuOpen}
            <svg class="w-6 h-6 text-dark-600 dark:text-dark-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="w-6 h-6 text-dark-600 dark:text-dark-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div id="mobile-menu" class="md:hidden py-4 border-t border-gray-200 dark:border-dark-600">
        <div class="flex flex-col gap-2">
          {#each navLinks as link}
            <a href={link.href}
               class="px-4 py-3 rounded-lg text-dark-600 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-700 hover:text-primary-500 font-medium transition-colors"
               on:click={closeMobileMenu}>
              {link.label}
            </a>
          {/each}
          <a href="/request-quote"
             class="mx-4 mt-2 px-4 py-3 bg-primary-500 text-white text-center font-semibold rounded-lg hover:bg-primary-600 transition-colors"
             on:click={closeMobileMenu}>
            Get Free Estimate
          </a>
          <a href="tel:9316446180"
             class="mx-4 px-4 py-3 text-center text-dark-600 dark:text-dark-200 font-medium">
            (931) 644-6180
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

<style>
  nav {
    top: env(safe-area-inset-top, 0);
  }
</style>
