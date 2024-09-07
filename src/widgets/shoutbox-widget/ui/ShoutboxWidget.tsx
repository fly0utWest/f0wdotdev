'use client';

import React, { useEffect } from 'react';
import { BsSendArrowUp as SendIcon } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';
import Oval from 'react-loading-icons/dist/esm/components/oval';
import { useTheme } from 'next-themes';
import useShoutbox from '../model/useShoutbox';

const ShoutboxWidget: React.FC = () => {
  const { message, failure, success, loading, sendMessage, setMessage } = useShoutbox();
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="w-full mb-5" id="shoutbox"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">wget</span> /tg-shoutbox
          </h2>
          <p className="text-gray-400 font-light text-sm">
            ## if u want to write something anonymously, u can do it here
          </p>
        </div>
        <form onSubmit={sendMessage}>
          {!loading && !failure && success && (
            <p className="text-green-500 text-base">
              Message was successfully sent
            </p>
          )}
          {!loading && failure && !success && (
            <p className="text-red-500 text-base">
              Message was not successfully sent
            </p>
          )}
          <div
            tabIndex={0}
            className="relative bg-gray-300 dark:bg-stone-950 flex flex-row items-center transition-colors dueation-200 w-full text-base h-28 max-h-max border-2 border-gray-400 dark:border-stone-900 focus-within:border-violet-400 dark:focus-within:border-violet-400"
          >
            {loading && (
              <div className="flex bg-gray-300 dark:bg-stone-950 gap-4 flex-row items-center justify-center absolute left-0 top-0 h-full w-full p-4">
                <Oval
                  stroke={`${theme === 'dark' ? '#fff' : '#000'}`}
                  className="h-6 w-6"
                />
                <p>Sending message...</p>
              </div>
            )}
            <textarea
              onChange={(event) => {
                setMessage((prevState) => ({
                  ...prevState,
                  text: event.target.value,
                }));
              }}
              value={message?.text}
              placeholder="Write something"
              className="resize-none p-4 outline-0 w-full h-full bg-transparent"
            ></textarea>
            <button className="pr-4 w-min h-min">
              <SendIcon className="h-6 w-6 hover:text-violet-400 transition-colors duration-200 bg-transparent" />
            </button>
          </div>
          <p className="text-gray-400 font-light text-sm mt-1">
            or, if u have somethong u&apos;d like to discuss, dm me in tg -{' '}
            <Link
              href="https://t.me/fly0utwest"
              className="text-violet-400 hover:underline text-xs"
            >
              @fly0utWest
            </Link>
          </p>
        </form>
      </section>
      <hr className="w-full border-gray-400 mb-10" />
    </>
  );
};

export default ShoutboxWidget;
