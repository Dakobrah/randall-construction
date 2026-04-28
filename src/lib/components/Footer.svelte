<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { COMPANY, SERVICE_AREAS } from '$lib/seo';

  $: themeValue = $theme;

  const footerLinks = {
    services: [
      { label: 'Land Clearing & Brush Removal', href: '/services/land-clearing-brush-removal' },
      { label: 'Dirt Work & Grading', href: '/services/dirt-work-grading' },
      { label: 'Foundation Preparation', href: '/services/foundation-prep' },
      { label: 'Stump Removal', href: '/services/stump-removal' },
      { label: 'Property & Land Management', href: '/services/property-management' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Equipment', href: '/equipment' },
      { label: 'Service Areas', href: '/service-areas' },
      { label: 'Request a Quote', href: '/request-quote' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Sitemap', href: '/sitemap.xml' }
    ]
  };

  const socialLinks = [
    {
      label: 'Facebook',
      href: COMPANY.facebook,
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />`
    }
  ];
</script>

<footer class="bg-dark-900 dark:bg-black text-white">
  <!-- Main Footer -->
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <!-- Brand -->
      <div class="lg:col-span-1">
        <a href="/" class="flex items-center gap-2 mb-6">
          <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <span class="text-xl font-heading font-bold text-white">Randall</span>
            <span class="text-xl font-heading font-bold text-primary-400"> Excavation</span>
          </div>
        </a>
        <p class="text-dark-300 mb-6 leading-relaxed">
          {COMPANY.tagline}. Locally owned and operated in Rickman, TN, serving the Upper Cumberland.
        </p>
        <!-- Contact -->
        <div class="space-y-3 mb-6">
          <a href="tel:{COMPANY.phoneRaw}" class="flex items-center gap-3 text-dark-300 hover:text-primary-400 transition-colors">
            <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {COMPANY.phone}
          </a>
          <a href="mailto:{COMPANY.email}" class="flex items-center gap-3 text-dark-300 hover:text-primary-400 transition-colors break-all">
            <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {COMPANY.email}
          </a>
          <div class="flex items-center gap-3 text-dark-300">
            <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
          </div>
        </div>
        <!-- Social -->
        <div class="flex gap-3">
          {#each socialLinks as social}
            <a href={social.href}
               target="_blank"
               rel="noopener noreferrer"
               class="w-10 h-10 bg-dark-700 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
               aria-label={social.label}>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {@html social.icon}
              </svg>
            </a>
          {/each}
        </div>
      </div>

      <!-- Services -->
      <div>
        <h4 class="font-heading font-bold text-white mb-6">Services</h4>
        <ul class="space-y-3">
          {#each footerLinks.services as link}
            <li>
              <a href={link.href} class="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="font-heading font-bold text-white mb-6">Company</h4>
        <ul class="space-y-3">
          {#each footerLinks.company as link}
            <li>
              <a href={link.href} class="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Service Areas -->
      <div>
        <h4 class="font-heading font-bold text-white mb-6">Service Areas</h4>
        <ul class="space-y-3 text-dark-300 text-sm">
          {#each SERVICE_AREAS as city}
            <li>{city}, TN</li>
          {/each}
          <li>And the surrounding 50-mile radius</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="border-t border-dark-700">
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-dark-400 text-sm">
          &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </p>
        <div class="flex gap-6">
          {#each footerLinks.legal as link}
            <a href={link.href} class="text-dark-400 hover:text-primary-400 text-sm transition-colors">
              {link.label}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</footer>

<!-- Mobile Bottom CTA Bar -->
<div class="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white/95 dark:bg-dark-800/95 backdrop-blur-md border-t border-gray-200 dark:border-dark-600 p-3 safe-area-pb">
  <div class="flex gap-3">
    <a href="tel:{COMPANY.phoneRaw}" class="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors" aria-label="Call Randall Excavation">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call Now
    </a>
  <a href="/request-quote" class="flex-1 flex items-center justify-center gap-2 py-3 bg-dark-900 dark:bg-white text-white dark:text-dark-900 font-semibold rounded-lg hover:bg-dark-700 dark:hover:bg-dark-100 transition-colors" aria-label="Request a quote">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      Get Estimate
    </a>
  </div>
</div>

<style>
  .safe-area-pb {
    padding-bottom: env(safe-area-inset-bottom, 0.75rem);
  }
</style>
