<script lang="ts">
  import '../app.css';

  import { onMount } from 'svelte';
  import { navigating, page } from '$app/stores';
  import { theme } from '$lib/stores/theme';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { getLocalBusinessJsonLd } from '$lib/seo';

  onMount(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      theme.setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.setTheme('dark');
    }
  });

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const observeElements = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    };

    observeElements();
    const unsubscribe = navigating.subscribe(() => setTimeout(observeElements, 100));

    return () => { unsubscribe(); observer.disconnect(); };
  });
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="%sveltekit.assets%/favicon.jpg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />

  {#if $page}
    <link rel="canonical" href={`${$page.url.origin}${$page.url.pathname}`} />
    <meta property="og:site_name" content="Randall Excavation" />
    <meta property="og:url" content={`${$page.url.origin}${$page.url.pathname}`} />
  {/if}

  {@html `<script type="application/ld+json">${JSON.stringify(getLocalBusinessJsonLd())}<\/script>`}
</svelte:head>

<div class="min-h-screen flex flex-col bg-white dark:bg-dark-900 transition-colors duration-300">
  <a href="#site-main" class="sr-only focus:not-sr-only focus:block fixed top-4 left-4 z-50 bg-white dark:bg-dark-800 text-primary-700 dark:text-primary-300 px-3 py-2 rounded shadow">Skip to main content</a>

  <Navbar />

  <main id="site-main" class="flex-grow pt-16 md:pt-20">
    <slot />
  </main>

  <Footer />
</div>

<style>
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
  .focus\:not-sr-only:focus { position: fixed; width: auto; height: auto; margin: 0; clip: auto; overflow: visible; white-space: normal; }

  main {
    padding-bottom: env(safe-area-inset-bottom, 0);
  }

  @media (max-width: 768px) {
    main { padding-bottom: 80px; }
  }
</style>
