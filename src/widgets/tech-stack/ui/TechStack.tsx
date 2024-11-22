import React from 'react';
import { getDictionary, publicImagesBaseUrl } from '@/shared/config';
import { Tool } from '@/shared/config/db/schema';
import { unstable_cache } from 'next/cache';
import { tools } from '@/shared/config/db/schema';
import Image from 'next/image';
import { db } from '@/db';
import ErrorDB from '@/shared/ui/ErrorDB';
import Link from 'next/link';
import { eq } from 'drizzle-orm';

export default async function TechStack(): Promise<JSX.Element> {
  const dictionary = await getDictionary();

  let devTools: Tool[] = [];
  let infTools: Tool[] = [];
  let error: boolean | undefined;

  const getTools = unstable_cache(
    async () => {
      const toolsSet = await db
        .select()
        .from(tools)
        .where(eq(tools.listed, true));
      return toolsSet;
    },
    undefined,
    { revalidate: 43200 },
  );

  try {
    const toolsData = await getTools();

    toolsData.forEach((tool) => {
      if (tool.category === 'dev') {
        devTools.unshift(tool);
      } else if (tool.category === 'inf') {
        infTools.unshift(tool);
      }
    });
  } catch (err) {
    error = true;
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
        {error ? (
          <ErrorDB>{dictionary['error-db']}</ErrorDB>
        ) : (
          <div className="text-lg flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-y-2">
            <div className="flex flex-col gap-2 md:items-center">
              <h3 className="w-min text-violet-400">
                {dictionary['home-page']['tech-stack-headings'][0]}
              </h3>
              <ul className="flex flex-col gap-3">
                {devTools.map((devTool) => (
                  <Link key={devTool.id} href={devTool.link}>
                    <li className="flex flex-row items-center gap-4 text-black dark:text-white">
                      <Image
                        src={`${publicImagesBaseUrl}/icons/tools/${devTool.icon}`}
                        width={24}
                        height={24}
                        alt="tool icon"
                        className="dark:invert"
                      />
                      <span>{devTool.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 md:items-center">
              <h3 className="w-min text-violet-400">
                {dictionary['home-page']['tech-stack-headings'][1]}
              </h3>
              <ul className="flex flex-col gap-3">
                {infTools.map((infTool) => (
                  <Link key={infTool.id} href={infTool.link}>
                    <li className="flex flex-row items-center gap-4 text-black dark:text-white">
                      <Image
                        src={`${publicImagesBaseUrl}/icons/tools/${infTool.icon}`}
                        width={24}
                        height={24}
                        alt="tool icon"
                        className="dark:invert"
                      />
                      <span>{infTool.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
}
