import React from 'react';
import Link from 'next/link';

export const BioSection: React.FC = () => {
  return (
    <>
    <div className='w-full mb-5' id="info"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>

        <h2 className="text-2xl">
          <span className="text-violet-400">cat</span> ~/info.txt
        </h2>
        <p className='text-sm text-gray-400 font-light'>## some random stuff about me with link to something more important</p>
        </div>
        <p className="text-sm">
          My name&apos;s Nikita (@fly0utwest). I have a passion for computer
          science in general, and now I mostly preoccupied with making web apps
          and fooling around with linux-based systems, but in near future
          I&apos;d like to know more about embedded programing and other
          interesting stuff idk ¯\_(ツ)_/¯
          <br />
          <br />
          You can read more about my setup{' '}
          <Link className="underline" href={'/about'}>
            here
          </Link>{' '}
          soon, i guess..
        </p>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};
