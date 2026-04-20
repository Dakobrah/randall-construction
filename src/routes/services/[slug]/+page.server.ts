import { error } from '@sveltejs/kit';

const validSlugs = [
  'residential-excavation',
  'commercial-site-development',
  'foundation-prep',
  'grading-drainage',
  'demolition-hauling',
  'land-clearing'
];

export const load = ({ params }) => {
  if (!validSlugs.includes(params.slug)) {
    throw error(404, 'Service not found');
  }
  return { slug: params.slug };
};
