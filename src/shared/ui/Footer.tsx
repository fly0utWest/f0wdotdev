import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className=" flex flex-col justify-center items-center w-full mb-16 min-h-24 border-t-gray-600 border-x-0 border-x-black border-t-2 border-b-0 dark:border-x-white md:border-x-2 bg-white dark:bg-black text-black dark:text-white">
      <p className="text-sm text-center">
        Served with{' '}
        <Link className="underline" href="https://caddyserver.com">
          Caddy
        </Link>
        <span className="block text-sm text-gray-600">
          Somewhere in Tallin, Estonia
        </span>
      </p>
      <p className="text-xs">
        You can read more about my setup{' '}
        <Link className="underline" href={'/about'}>
          here
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
