<script lang="ts">
  import '$app/stores';
  import '$app/forms';
  import '../../app.css';
  
  import { onMount, afterUpdate } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { getLocalBusinessJsonLd } from '$lib/seo';
  import { page } from '$app/stores';

  let scrolled = $state(false);

  onMount(() => {
    // Initialize theme
    const stored = localStorage.getItem('theme');
    if (stored) {
      theme.setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.setTheme('dark');
    }

    // Scroll handler
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // Intersection observer for scroll animations
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const observeElements = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    };

    observeElements();
    // Re-observe after route changes
    const unsubscribe = $page.stores.navigator.subscribe(() => {
      setTimeout(observeElements, 100);
    });

    return () => {
      unsubscribe();
      observer.disconnect();
    };
  });
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="%sveltekit.assets%/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />

  <!-- Default Open Graph + Canonical (can be overridden per-page) -->
  {#if $page}
    <link rel="canonical" href={`${$page.url.origin}${$page.url.pathname}`} />
    <meta property="og:site_name" content="Randell Construction" />
    <meta property="og:url" content={`${$page.url.origin}${$page.url.pathname}`} />
  {/if}

  <!-- LocalBusiness JSON-LD for organization (search engines) -->
  {@html `<script type="application/ld+json">${JSON.stringify(getLocalBusinessJsonLd())}</script>`}
</svelte:head>

<svelte:window bind:scrollY />

<div class="min-h-screen flex flex-col bg-white dark:bg-dark-900 transition-colors duration-300">
  <!-- Skip link for keyboard users -->
  <a href="#site-main" class="skip-link sr-only focus:not-sr-only focus:block fixed top-4 left-4 z-50 bg-white dark:bg-dark-800 text-primary-700 dark:text-primary-300 px-3 py-2 rounded shadow">Skip to main content</a>

  <Navbar />

  <main id="site-main" role="main" class="flex-grow pt-16 md:pt-20">
    <slot />
  </main>

  <Footer />
</div>

<style>
  /* Utility to hide until focused (accessible skip-link) */
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
  .focus\:not-sr-only:focus { position: fixed; width: auto; height: auto; margin: 0; clip: auto; overflow: visible; white-space: normal; }
</style>

<style>
  main {
    padding-bottom: env(safe-area-inset-bottom, 0);
  }
  
  @media (max-width: 768px) {
    main {
      padding-bottom: 80px;
    }
  }
</style>
