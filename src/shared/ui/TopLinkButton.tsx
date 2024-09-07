'use client';

import React, { useState, useEffect } from 'react';
import { GoMoveToTop as ToTheTopIcon } from 'react-icons/go';
import Link from 'next/link';

const TopLinkButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setVisible(true);
      } else setVisible(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      href="#header"
      className={`${visible ? 'pointer-events-auto opacity-1' : 'pointer-events-none opacity-0'} duration-300 transition-opacity w-10 h-10 flex items-center justify-center rounded-full bg-white border-black border-2 fixed bottom-20 right-4 dark:text-white dark:bg-black dark:border-white`}
    >
      <ToTheTopIcon />
    </Link>
  );
};

export default TopLinkButton;
