'use client';

import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const BioSection: React.FC = () => {
  const [info, setInfo] = useState({
    timezone: '',
    location: 'Russia',
    languages: ['en-US', 'ru-RU', 'uk_UA'],
  });

  useEffect(() => {
    const liveTime = () => {
      const currentDate = new Date();
      setInfo((prevInfo) => ({
        ...prevInfo,
        timezone: `UTC+3 (${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()})`,
      }));
    };

    const intervalId = setInterval(liveTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="w-full mb-5" id="info"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">cat</span> ~/info/info.jsonc
          </h2>
          <p className="text-sm text-gray-400 font-light">
            ## some random stuff about me with link to something more important
          </p>
        </div>
        <p className="text-base">
          {
            "// My name's Nikita aka @fly0utwest. I have a passion for computer science in general, and now I mostly preoccupied with making web apps and tinkering with linux-based systems, but in near future I'd like to know more about embedded programing and other interesting stuff like networking, devOps and SRE."
          }
          <br />
        </p>
        <pre className="text-base">{JSON.stringify(info, undefined, 2)}</pre>
        <p className="text-base">
          You can read more about my setup{' '}
          <Link className="underline" href={'/about'}>
            here
          </Link>
          .
        </p>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};
