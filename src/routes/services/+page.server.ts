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
        link: `/services/${slug}`,
        features: meta.features || []
      };
    });
  } catch (e) {
    // If glob import isn't available in this environment, use a small static fallback
    services = [
      { slug: 'residential-excavation', title: 'Residential Excavation', description: 'Expert lot preparation...', icon: 'excavation', link: '/services/residential-excavation', features: [] }
    ];
  }

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'Free site evaluation and project assessment.' },
    { step: '02', title: 'Planning & Permits', description: 'Detailed project plan and permit acquisition.' },
    { step: '03', title: 'Execution', description: 'Professional excavation with modern equipment and experienced operators.' },
    { step: '04', title: 'Inspection & Closeout', description: 'Inspection-ready site and final grading verification.' }
  ];

  const seo = {
    title: 'Our Services | Randall Excavation - Excavation, Grading & Demolition',
    description: 'Complete excavation, grading, demolition, and site development services for residential and commercial projects. Licensed, insured, 20+ years experience.',
    canonical: 'https://www.randallexcavation.com/services'
  };

  return {
    services,
    processSteps,
    seo
  };
};
