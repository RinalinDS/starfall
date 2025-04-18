import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type Context = {
  changeTheme: () => void;
  theme: string;
};

const ThemeContext = createContext<Context | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState(() => {
    const storedValue = localStorage.getItem('theme');
    if (storedValue && ['light', 'dark'].includes(storedValue)) {
      return storedValue;
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

  const changeTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

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
