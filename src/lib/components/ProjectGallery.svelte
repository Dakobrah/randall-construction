<script lang="ts">
  type Project = {
    id: string;
    title: string;
    category: 'residential' | 'commercial';
    phase?: string;
    image: string;
    location: string;
    description: string;
    specs?: { label: string; value: string }[];
  };

  export let projects: Project[] = [
    {
      id: '1',
      title: 'Oak Creek Lot Development',
      category: 'residential',
      phase: 'Phase 1',
      image: '/projects/oak-creek.jpg',
      location: 'Columbus, IL',
      description: 'Complete site preparation for 48-lot residential subdivision including grading, utility rough-in, and erosion control.',
      specs: [
        { label: 'Area', value: '32 acres' },
        { label: 'Duration', value: '4 months' },
        { label: 'Equipment', value: '12 units' }
      ]
    },
    {
      id: '2',
      title: 'Riverside Commercial Plaza',
      category: 'commercial',
      phase: 'Foundation',
      image: '/projects/riverside.jpg',
      location: 'Springfield, IL',
      description: 'Deep excavation and foundation prep for 45,000 sq ft commercial retail center with parking structure.',
      specs: [
        { label: 'Area', value: '45,000 sq ft' },
        { label: 'Depth', value: '18 ft' },
        { label: 'Soil Type', value: 'Clay/Bedrock' }
      ]
    },
    {
      id: '3',
      title: 'Maple Street Foundation Prep',
      category: 'residential',
      phase: 'Foundation',
      image: '/projects/maple-street.jpg',
      location: 'Champaign, IL',
      description: 'Precision foundation excavation for custom luxury home with walkout basement design.',
      specs: [
        { label: 'Footprint', value: '3,200 sq ft' },
        { label: 'Basement', value: 'Walkout' },
        { label: 'Duration', value: '2 weeks' }
      ]
    },
    {
      id: '4',
      title: 'Industrial Park Demolition',
      category: 'commercial',
      phase: 'Demolition',
      image: '/projects/industrial-park.jpg',
      location: 'Peoria, IL',
      description: 'Complete demolition of 3-story industrial building with asbestos abatement and site clearance.',
      specs: [
        { label: 'Building', value: '28,000 sq ft' },
        { label: 'Debris', value: '420 tons' },
        { label: 'Recycling', value: '85%' }
      ]
    },
    {
      id: '5',
      title: 'Hillside Drainage System',
      category: 'residential',
      phase: 'Drainage',
      image: '/projects/hillside.jpg',
      location: 'Naperville, IL',
      description: 'Complex grading and French drain installation for hillside property with chronic water issues.',
      specs: [
        { label: 'Slope', value: '25%' },
        { label: 'Drain Length', value: '800 ft' },
        { label: 'Retention', value: 'Design' }
      ]
    },
    {
      id: '6',
      title: 'Downtown Mixed-Use Site',
      category: 'commercial',
      phase: 'Site Dev',
      image: '/projects/downtown.jpg',
      location: 'Springfield, IL',
      description: 'Urban infill site preparation for 120-unit mixed-use development in downtown core.',
      specs: [
        { label: 'Units', value: '120' },
        { label: 'Underground', value: 'Utilities' },
        { label: 'Timeline', value: '6 months' }
      ]
    }
  ];

  let activeFilter: 'all' | 'residential' | 'commercial' = 'all';
  let selectedProject: Project | null = null;

  $: filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const filters: { val: 'all' | 'residential' | 'commercial'; label: string }[] = [
    { val: 'all', label: 'All Projects' },
    { val: 'residential', label: 'Residential' },
    { val: 'commercial', label: 'Commercial' }
  ];

  function openProject(project: Project) { selectedProject = project; }
  function closeProject() { selectedProject = null; }
</script>

<section class="py-16 md:py-24 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <span class="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
        OUR WORK
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white mb-4">
        Featured Projects
      </h2>
      <p class="text-dark-400 dark:text-dark-300 max-w-2xl mx-auto">
        Browse our portfolio of residential and commercial excavation, grading, and demolition projects.
      </p>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      {#each filters as { val, label }}
        <button
          class="px-6 py-3 rounded-full font-semibold transition-all"
          class:bg-primary-500={activeFilter === val}
          class:text-white={activeFilter === val}
          class:bg-gray-100={activeFilter !== val}
          class:dark:bg-dark-700={activeFilter !== val}
          class:text-dark-600={activeFilter !== val}
          on:click={() => activeFilter = val}>
          {label}
        </button>
      {/each}
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each filteredProjects as project (project.id)}
        <div class="group card overflow-hidden cursor-pointer animate-on-scroll"
             on:click={() => openProject(project)}
             tabindex="0"
             role="button"
             aria-label={`Open ${project.title} details`}
             on:keydown={(e) => {
               if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(project); }
             }}>
          <!-- Image -->
          <div class="relative h-56 overflow-hidden">
            <img src={project.image}
                 alt={project.title}
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 loading="lazy"
                 width="400"
                 height="224" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full capitalize">
                {project.category}
              </span>
            </div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="px-6 py-2 bg-white/90 text-dark-900 font-semibold rounded-full">View Details</span>
            </div>
          </div>
          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center gap-2 text-sm text-dark-400 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </div>
            <h3 class="text-lg font-heading font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
              {project.title}
            </h3>
            <p class="text-dark-400 text-sm line-clamp-2">{project.description}</p>
            {#if project.specs}
              <div class="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-dark-700">
                {#each project.specs.slice(0, 2) as spec}
                  <span class="text-xs text-dark-500 dark:text-dark-400">
                    <span class="font-semibold text-dark-700 dark:text-dark-200">{spec.value}</span> {spec.label}
                  </span>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    {#if filteredProjects.length === 0}
      <div class="text-center py-16">
        <p class="text-dark-400 text-lg">No projects found in this category.</p>
      </div>
    {/if}

    <div class="text-center mt-12">
      <a href="/request-quote" class="btn-primary">
        Start Your Project
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Project Modal -->
  {#if selectedProject}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
         on:click={closeProject}
         on:keydown={(e) => e.key === 'Escape' && closeProject()}
         role="presentation"
         tabindex="-1">
      <div class="bg-white dark:bg-dark-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
           role="dialog"
           aria-modal="true"
           aria-label={selectedProject.title}
           tabindex="0"
           on:click|stopPropagation
           on:keydown|stopPropagation>
        <div class="relative h-64 md:h-80">
          <img src={selectedProject.image} alt={selectedProject.title} class="w-full h-full object-cover" />
          <button class="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-dark-800/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            on:click={closeProject}
            aria-label="Close project dialog">
            <svg class="w-5 h-5 text-dark-600 dark:text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="p-6 md:p-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-full capitalize">
              {selectedProject.category}
            </span>
            {#if selectedProject.phase}
              <span class="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400 text-xs font-semibold rounded-full">
                {selectedProject.phase}
              </span>
            {/if}
          </div>
          <h3 class="text-2xl md:text-3xl font-heading font-bold text-dark-900 dark:text-white mb-2">
            {selectedProject.title}
          </h3>
          <div class="flex items-center gap-2 text-dark-400 mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {selectedProject.location}
          </div>
          <p class="text-dark-500 dark:text-dark-400 mb-6 leading-relaxed">{selectedProject.description}</p>
          {#if selectedProject.specs}
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
              {#each selectedProject.specs as spec}
                <div>
                  <p class="text-xs text-dark-400 uppercase tracking-wide">{spec.label}</p>
                  <p class="font-semibold text-dark-900 dark:text-white">{spec.value}</p>
                </div>
              {/each}
            </div>
          {/if}
          <a href="/request-quote" class="btn-primary w-full justify-center">Get Similar Results</a>
        </div>
      </div>
    </div>
  {/if}
</section>
