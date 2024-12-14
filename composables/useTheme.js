import { ref, onMounted, onUnmounted } from 'vue';

export const useTheme = () => {
  const theme = ref('light'); // Default theme

  // Check if localStorage is available
  const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  const getStoredTheme = () => {
    return isBrowser ? localStorage.getItem('theme') : null;
  };

  const applyTheme = (newTheme) => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  };

  const setTheme = (newTheme) => {
    console.log(newTheme, 'set theme');
    theme.value = newTheme;
    if (isBrowser) {
      localStorage.setItem('theme', newTheme);
    }
    applyTheme(newTheme);
  };

  const handleSystemThemeChange = (event) => {
    if (!getStoredTheme()) {
      setTheme(event.matches ? 'dark' : 'light');
    }
  };

  const prefersDark = isBrowser && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  // Initialize theme and add listeners
  onMounted(() => {
    if (isBrowser) {
      const storedTheme = getStoredTheme();
      if (!storedTheme && prefersDark) {
        setTheme(prefersDark.matches ? 'dark' : 'light');
      } else if (storedTheme) {
        setTheme(storedTheme);
      }

      if (prefersDark) {
        prefersDark.addEventListener('change', handleSystemThemeChange);
      }
    }
  });

  // Cleanup listeners
  onUnmounted(() => {
    if (prefersDark) {
      prefersDark.removeEventListener('change', handleSystemThemeChange);
    }
  });

  return { theme, setTheme };
};
