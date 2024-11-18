import React from 'react';
import { Link, getDictionary } from '@/shared/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Tool } from '@/shared/model';
import { unstable_cache } from 'next/cache';
import { tools } from '@/shared/config/db/schema';
import Image from 'next/image';

export default async function TechStack(): Promise<JSX.Element> {
  const db = drizzle(process.env.DATABASE_URL!);
  const dictionary = await getDictionary();

  let devTools: Tool[] = [];
  let infTools: Tool[] = [];
  let error: string | undefined;

  const getTools = unstable_cache(
    async () => {
      const toolsSet = await db.select().from(tools);
      return toolsSet;
    },
    undefined,
    { revalidate: 43200 },
  );

  try {
    const toolsData = await getTools();

    toolsData.forEach((element) => {
      if (element.category === 'dev') {
        devTools.unshift(element);
      } else if (element.category === 'inf') {
        infTools.unshift(element);
      }
    });
  } catch (err) {
    error = 'Something went wrong during fetch from DB.';
  }

  return (
    <>
      <div className="w-full mb-5" id="tech-stack"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl text-black dark:text-white">
            <span className="text-violet-400">cat</span>{' '}
            {dictionary['home-page'].headings[1]}
          </h2>
          <p className="text-gray-400 text-sm font-light">
            {dictionary['home-page']['tech-stack-tip']}
          </p>
        </div>
        <div className="text-lg flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-y-2">
          <div className="flex flex-col gap-2 md:items-center">
            <h3 className="w-min text-violet-400">
              {dictionary['home-page']['tech-stack-headings'][0]}
            </h3>
            <ul className="space-y-2">
              {devTools.map((element) => (
                <li
                  key={element.id}
                  className="flex flex-row items-center gap-4"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/icons/tools/${element.icon}`}
                    width={24}
                    height={24}
                    alt="tool icon"
                    className="dark:invert"
                  />
                  <span>{element.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:items-center">
            <h3 className="w-min text-violet-400">
              {dictionary['home-page']['tech-stack-headings'][1]}
            </h3>
            <ul className="space-y-2">
              {infTools.map((element) => (
                <li
                  key={element.id}
                  className="flex flex-row items-center gap-4"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/icons/tools/${element.icon}`}
                    width={24}
                    height={24}
                    alt="tool icon"
                    className="dark:invert"
                  />
                  <span>{element.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
}
