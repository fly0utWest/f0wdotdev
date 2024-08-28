"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  HiOutlineSun as SunIcon,
  HiOutlineMoon as MoonIcon,
} from 'react-icons/hi';

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  if (currentTheme === 'light')
    return <MoonIcon className="w-4 h-4" onClick={() => setTheme('dark')} />;

  if (currentTheme === 'dark')
    return <SunIcon className="w-4 h-4" onClick={() => setTheme('light')} />;
};

export default ThemeSwitcher;
