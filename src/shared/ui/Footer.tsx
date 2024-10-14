import React from 'react';
import { Link, getDictionary } from '../config';

export default async function Footer(): Promise<JSX.Element> {
  const dictionary = await getDictionary();

  return (
    <footer className=" flex flex-col justify-center items-center w-full mb-16 min-h-24 border-t-gray-600 border-x-0 border-x-black border-t-2 border-b-0 dark:border-x-white md:border-x-2 bg-white dark:bg-black text-black dark:text-white">
      <p className="text-sm text-center">
        {dictionary.footer['served-with']}{' '}
        <Link className="underline" href="https://caddyserver.com">
          Caddy
        </Link>
        <span className="block text-sm text-gray-600">
          {dictionary.footer.location}
        </span>
      </p>
      <p className="text-xs">
        {dictionary.footer.more}{' '}
        <Link className="underline" href={'/about'}>
          {dictionary.footer['more-link']}
        </Link>
      </p>
    </footer>
  );
}
