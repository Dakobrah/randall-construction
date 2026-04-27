import { error } from '@sveltejs/kit';

const validSlugs = [
  'foundation-prep',
  'land-clearing-brush-removal',
  'dirt-work-grading',
  'stump-removal',
  'property-management'
];

export const load = ({ params }) => {
  if (!validSlugs.includes(params.slug)) {
    throw error(404, 'Service not found');
  }
  return { slug: params.slug };
};
