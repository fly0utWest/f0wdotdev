'use client';

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

  if (currentTheme === 'dark')
    return (
      <MoonIcon
        className="w-6 h-6 cursor-pointer"
        onClick={() => setTheme('light')}
      />
    );

  if (currentTheme === 'light')
    return (
      <SunIcon
        className="w-6 h-6 cursor-pointer"
        onClick={() => setTheme('dark')}
      />
    );
};

export default ThemeSwitcher;
