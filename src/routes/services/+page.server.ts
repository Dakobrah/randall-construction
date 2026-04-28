export const load = async () => {
  // Try to load MDsveX service files via Vite glob; fall back to inline array if glob fails
  let services = [];

  try {
    // glob pattern - Vite resolves this at build time
    const modules = import.meta.glob('/src/lib/content/services/*.mdx', { eager: true });

    services = Object.values(modules).map((mod: any) => {
      const meta = mod.metadata || mod.frontmatter || {};
      const slug = meta.slug || (meta.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return {
        slug,
        title: meta.title || 'Service',
        description: meta.description || '',
        icon: meta.icon || 'development',
        image: meta.image || '',
        link: `/services/${slug}`,
        features: meta.features || []
      };
    });
  } catch (e) {
    // If glob import isn't available in this environment, use a small static fallback
    services = [
      { slug: 'foundation-prep', title: 'Foundation Preparation', description: 'Footer digging and foundation prep.', icon: 'excavation', link: '/services/foundation-prep', features: [] }
    ];
  }

  const processSteps = [
    { step: '01', title: 'Call or Text', description: 'Reach us at 931-644-6180 or by email — tell us about the job.' },
    { step: '02', title: 'Free Estimate', description: 'We come look at the site and give you an honest, no-pressure estimate.' },
    { step: '03', title: 'Schedule', description: 'Once you\u2019re ready, we get on the calendar and confirm the start date.' },
    { step: '04', title: 'Get It Done', description: 'Work is finished clean, on time, and to the agreed scope.' }
  ];

  const seo = {
    title: 'Our Services | Randall Excavation — Land Clearing, Grading & Foundation Prep',
    description: 'Land clearing, dirt work and grading, foundation prep, stump removal, and property management. Locally owned in Rickman, TN — serving the Upper Cumberland.',
    canonical: 'https://www.randallexcavation.com/services'
  };

  return {
    services,
    processSteps,
    seo
  };
};
