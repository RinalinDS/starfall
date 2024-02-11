import { useState, useEffect, useMemo } from 'react';

type ThemeModeType = 'dark' | 'light';

export type ThemeType = typeof lightPallete;

const lightPallete = {
  cta: {
    primary: '#3498db',
    secondary: '#002366',
    tertiary: '#4169e1',
  },
  text: {
    white: '#fff',
    darkGrey: '#999',
    hero: '#F1F3F1',
  },
  background: {
    primary: 'aquamarine',
    secondary: '#fff',
    hero: '#607262',
    modal: '0, 0, 0',
  },
  border: {
    primary: '#000',
  },
};

const darkPallete: ThemeType = {
  cta: {
    primary: '#09314d',
    secondary: '#021029',
    tertiary: '#0d2f97',
  },
  text: {
    white: '#fff',
    darkGrey: '#999',
    hero: '#F1F3F1',
  },
  background: {
    primary: 'violet',
    secondary: '#ccc',
    hero: '#607262',
    modal: '#aaa',
  },
  border: {
    primary: '#000',
  },
};

type HookReturnType = {
  changeThemeHandler: () => void;
  theme: ThemeType;
};

export const usePallete = (): HookReturnType => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>('light');

  useEffect(() => {
    const themeFromLocalStotage = localStorage.getItem('theme');
    if (themeFromLocalStotage === 'dark' || themeFromLocalStotage === 'light') {
      setThemeMode(themeFromLocalStotage);
    }
  }, []);

  const getTheme = (mode: ThemeModeType) =>
    mode === 'light' ? lightPallete : darkPallete;

  const theme = useMemo(() => ({ ...getTheme(themeMode) }), [themeMode]);

  const changeThemeHandler = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setThemeMode('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return {
    changeThemeHandler,
    theme,
  };
};
