// SEO utilities for Randall Excavation

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'service' | 'local_business';
}

export interface JsonLdData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

// Company info
export const COMPANY = {
  name: 'Randall Excavation',
  legalName: 'Randall Construction And Excavation',
  tagline: 'All Things Land Management and Construction',
  phone: '(931) 644-6180',
  phoneRaw: '9316446180',
  email: 'randallconstruction25@gmail.com',
  city: 'Rickman',
  state: 'TN',
  zip: '38580',
  logo: '/logo.png',
  url: 'https://www.randallexcavation.com',
  facebook: 'https://www.facebook.com/p/Randall-Construction-And-Excavation-61584781014847/'
};

// Service area cities (Upper Cumberland, TN)
export const SERVICE_AREAS = [
  'Rickman',
  'Cookeville',
  'Livingston',
  'Algood',
  'Monterey',
  'Sparta',
  'Crossville',
  'Jamestown',
  'Byrdstown'
];

// Default SEO for home page
export const homeSeo: SeoMeta = {
  title: 'Randall Excavation | Land Clearing, Grading & Foundation Prep — Rickman, TN',
  description: 'Locally owned excavation and land management serving Rickman, Cookeville, Livingston and the Upper Cumberland. Land clearing, dirt work & grading, stump removal, foundation prep. Licensed, insured, free estimates.',
  keywords: [
    'excavation Rickman TN',
    'excavation Cookeville TN',
    'land clearing Upper Cumberland',
    'dirt work and grading Tennessee',
    'stump removal Cookeville',
    'foundation prep Rickman',
    'brush removal Tennessee',
    'property management excavation'
  ]
};

// Service page SEO templates
export const serviceSeo: Record<string, SeoMeta> = {
  'foundation-prep': {
    title: 'Foundation Preparation | Footer Digging & Site Prep — Rickman, TN',
    description: 'Foundation preparation and footer digging for new homes and additions throughout the Upper Cumberland. Free estimates — call 931-644-6180.',
    keywords: ['foundation prep Rickman TN', 'footer digging', 'foundation excavation Cookeville', 'site preparation Tennessee']
  },
  'land-clearing-brush-removal': {
    title: 'Land Clearing & Brush Removal | Lot Clearing — Upper Cumberland TN',
    description: 'Land clearing, brush removal, and lot prep for new builds, pasture, and land management. Serving Rickman, Cookeville, Livingston and surrounding areas.',
    keywords: ['land clearing Cookeville TN', 'brush removal Upper Cumberland', 'lot clearing Rickman', 'forestry mulching Tennessee']
  },
  'dirt-work-grading': {
    title: 'Dirt Work & Grading | Driveways, Drainage & Pads — Rickman, TN',
    description: 'Dirt work, grading, gravel driveways, drainage lines, and building pads. Locally owned and operated in Rickman, TN.',
    keywords: ['dirt work Tennessee', 'grading contractor Cookeville', 'gravel driveway Rickman', 'drainage line install']
  },
  'stump-removal': {
    title: 'Stump Removal & Grinding | Upper Cumberland TN',
    description: 'Professional stump removal for residential and commercial properties throughout the Upper Cumberland. Call 931-644-6180 for a free quote.',
    keywords: ['stump removal Cookeville TN', 'stump grinding Rickman', 'tree stump removal Tennessee']
  },
  'property-management': {
    title: 'Property & Land Management Services — Rickman, TN',
    description: 'Land management, lot maintenance, and ongoing property care across the Upper Cumberland. Licensed and insured.',
    keywords: ['property management excavation', 'land management Tennessee', 'lot maintenance Cookeville']
  }
};

// Generate JSON-LD for LocalBusiness
export function getLocalBusinessJsonLd(): JsonLdData[] {
  return [{
    '@context': 'https://schema.org',
    '@type': 'ConstructionBusiness',
    name: COMPANY.name,
    alternateName: COMPANY.legalName,
    description: COMPANY.tagline,
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.2487',
      longitude: '-85.2566'
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '36.2487',
        longitude: '-85.2566'
      },
      geoRadius: '50 miles'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    sameAs: [COMPANY.facebook]
  }];
}

// Generate JSON-LD for Service
export function getServiceJsonLd(name: string, description: string, area: string): JsonLdData[] {
  return [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'ConstructionBusiness',
      name: COMPANY.name
    },
    description,
    areaServed: area,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${COMPANY.url}/request-quote`
    }
  }];
}

// Generate JSON-LD for FAQ
export function getFaqJsonLd(faqs: { question: string; answer: string }[]): JsonLdData[] {
  return [{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq, i) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }];
}

// Generate JSON-LD for Review
export function getReviewJsonLd(reviews: { author: string; rating: number; text: string; date?: string }[]): JsonLdData[] {
  return [{
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: review.text,
      ...(review.date ? { date: review.date } : {})
    }))
  }];
}

// Generate JSON-LD for Project
export function getProjectJsonLd(project: {
  name: string;
  description: string;
  image?: string;
  location?: string;
  date?: string;
}): JsonLdData[] {
  return [{
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.image,
    locationCreated: project.location,
    dateCreated: project.date
  }];
}
