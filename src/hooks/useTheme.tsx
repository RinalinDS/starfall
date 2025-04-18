import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

type ThemeContextType = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<ThemeContextType>(() => {
    const storedValue = localStorage.getItem('theme');
    if (storedValue && ['light', 'dark'].includes(storedValue)) {
      return storedValue as ThemeContextType;
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(`Should've been used inside of the Context Provider`);

  return context;
};
