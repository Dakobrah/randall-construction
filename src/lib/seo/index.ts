// SEO utilities for Randell Construction

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
  name: 'Randell Construction',
  tagline: 'Excavation & Site Development Experts',
  phone: '(555) 123-4567',
  email: 'info@randellconstruction.com',
  address: '123 Construction Way',
  city: 'Springfield',
  state: 'IL',
  zip: '62701',
  logo: '/logo.png',
  url: 'https://www.randellconstruction.com'
};

// Default SEO for home page
export const homeSeo: SeoMeta = {
  title: 'Randell Construction | Excavation, Grading & Demolition Services',
  description: 'Professional excavation, grading, and demolition services for residential and commercial projects. Licensed, insured, and trusted by developers. Get a free estimate today.',
  keywords: [
    'excavation contractor',
    'site preparation',
    'grading and drainage',
    'demolition services',
    'commercial excavation',
    'residential excavation',
    'lot development'
  ]
};

// Service page SEO templates
export const serviceSeo: Record<string, SeoMeta> = {
  'residential-excavation': {
    title: 'Residential Excavation Contractor | Lot Prep & Foundation Dig',
    description: 'Expert residential excavation services including lot preparation, foundation digging, and basement prep. Licensed contractors with 20+ years experience.',
    keywords: ['residential excavation contractor', 'lot preparation', 'foundation digging', 'basement excavation']
  },
  'commercial-site-development': {
    title: 'Commercial Site Preparation Company | Developer Services',
    description: 'Commercial site preparation and development for builders and developers. Phased excavation, grading, and infrastructure prep. Schedule a site walk.',
    keywords: ['commercial site preparation company', 'commercial lot development', 'developer excavation', 'site development contractors']
  },
  'foundation-prep': {
    title: 'Foundation Excavation Near Me | Precision Site Prep',
    description: 'Professional foundation excavation and site preparation services. Geo-targeted local service with fast turnaround. Call for a free foundation prep quote.',
    keywords: ['foundation excavation near me', 'foundation prep', 'excavation for foundation', 'local excavation services']
  },
  'grading-drainage': {
    title: 'Grading & Drainage Contractor | Stormwater Management',
    description: 'Expert grading and drainage solutions for residential and commercial properties. Soil classification, stormwater compliance, and erosion control.',
    keywords: ['grading and drainage contractor', 'stormwater management', 'erosion control', 'land grading']
  },
  'demolition-hauling': {
    title: 'Demolition & Hauling Services | Safe Site Clearance',
    description: 'Professional demolition and hauling services. Structural demolition, concrete removal, and debris hauling with proper disposal permits.',
    keywords: ['demolition and hauling services', 'structural demolition', 'concrete removal', 'debris hauling']
  }
};

// Generate JSON-LD for LocalBusiness
export function getLocalBusinessJsonLd(): JsonLdData[] {
  return [{
    '@context': 'https://schema.org',
    '@type': 'ConstructionBusiness',
    name: COMPANY.name,
    description: COMPANY.tagline,
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.zip
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '39.7817',
      longitude: '-89.6501'
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '39.7817',
        longitude: '-89.6501'
      },
      geoRadius: '50 miles'
    },
    priceRange: '$$-$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '18:00'
    },
    sameAs: [
      'https://www.facebook.com/randellconstruction',
      'https://www.linkedin.com/company/randellconstruction',
      'https://www.instagram.com/randellconstruction'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Licensed General Contractor'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'OSHA Certified'
      }
    ]
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
