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
    primary: '#111',
    darkGrey: '#333',
    secondary: '#333',

    hero: '#F1F3F1',
    fill: '#000',
    stroke: '#fff',
    white: '#fff',
  },
  background: {
    primary: '#bbb',
    secondary: '#999',
    hero: '#607262',
    modal: '0, 0, 0',
    hover: '#444',
  },
  border: {
    primary: '#515151',
  },
};

const darkPallete: ThemeType = {
  cta: {
    primary: '#09314d',
    secondary: '#021029',
    tertiary: '#0d2f97',
  },
  text: {
    primary: '#fff',
    secondary: '#ccc',
    darkGrey: '#999',
    hero: '#F1F3F1',
    fill: '#fff',
    stroke: '#000',
    white: '#fff',
  },
  background: {
    primary: '#333',
    secondary: '#181818',
    hero: '#607262',
    modal: '#aaa',
    hover: '#444',
  },
  border: {
    primary: '#313131',
  },
};

type HookReturnType = {
  changeThemeHandler: () => void;
  theme: ThemeType;
  themeMode: string;
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
    themeMode,
  };
};
