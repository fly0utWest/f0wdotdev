import React from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <header className="min-w-full border-b-2 border-b-black h-28 px-6 flex flex-1 items-center justify-center light:border-b-black dark:border-b-white">
      <div className="h-full w-full md: max-w-[768px] flex flex-1 items-center justify-between">
        <div className='flex flex-col gap-2'>
          <h1 className="font-bold text-2xl">fly0utWest</h1>
          <span className='typed-[sloppy_web_dev;linux_freak;do_someone_even_read_this?] typed-caret-width-2 typed-caret typed-caret-space-2 typed-caret-color-black dark:typed-caret-color-white'></span>
        </div>
        <Image src={'/milk-gif.gif'} width={64} height={64} alt="Milk gif" />
      </div>
    </header>
  );
};
