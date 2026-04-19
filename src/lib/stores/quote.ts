import { writable, get } from 'svelte/store';

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  projectType: 'residential' | 'commercial' | 'demolition' | 'grading' | 'other';
  projectTypeOther: string;
  projectSize: string;
  location: string;
  timeline: string;
  budget: string;
  description: string;
  consent: boolean;
}

const initialFormData: QuoteFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: 'residential',
  projectTypeOther: '',
  projectSize: '',
  location: '',
  timeline: 'asap',
  budget: '',
  description: '',
  consent: false
};

export const quoteForm = writable<QuoteFormData>({ ...initialFormData });
export const quoteStatus = writable<'idle' | 'submitting' | 'success' | 'error'>('idle');
export const quoteErrors = writable<Record<string, string>>({});

export function updateField(field: keyof QuoteFormData, value: any) {
  quoteForm.update((form) => ({ ...form, [field]: value }));
  // Clear error for this field
  quoteErrors.update((errors) => {
    const newErrors = { ...errors };
    delete newErrors[field];
    return newErrors;
  });
}

export function resetForm() {
  quoteForm.set({ ...initialFormData });
  quoteErrors.set({});
  quoteStatus.set('idle');
}

// Validation schema
export function validateForm(data: QuoteFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\d\s\-+()]{7,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  if (!data.description.trim()) errors.description = 'Please describe your project';
  if (!data.consent) errors.consent = 'Consent is required';

  return errors;
}
