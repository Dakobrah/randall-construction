import { writable } from 'svelte/store';

function createThemeStore() {
  const { subscribe, set } = writable<'light' | 'dark'>('light');

  // Initialize from localStorage or system preference
  const initTheme = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        set(stored);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        set('dark');
      }
    }
  };

  initTheme();

  return {
    subscribe,
    toggle: () => {
      set((prev) => {
        const next = prev === 'light' ? 'dark' : 'light';
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', next);
          document.documentElement.setAttribute('data-theme', next);
        }
        return next;
      });
    },
    setTheme: (theme: 'light' | 'dark') => {
      set(theme);
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }
    }
  };
}

export const theme = createThemeStore();
