import Image from 'next/image';
import React from 'react';

const ToolsWidget: React.FC = () => {
  return (
    <>
      <div className="w-full mb-5" id="tools"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">ls</span> /dev/everything
          </h2>
          <p className="text-gray-400 text-sm font-light">
            {"## pieces of tech I use"}
          </p>
        </div>
        <h3>Devices</h3>
        <p className="text-base font-medium">
          There&apos;s not much to say about here. I use Thinkpad T14s gen3, NixOS as
          daily driver. Text editors are VS Code and Vim, when needed.
        </p>
        <details>
            <summary className='text-base font-bold cursor-pointer select-none'>neofetch</summary>
            <figure>
                <Image className='border-2 border-black dark:border-white' src={'/neofetch.png'} width={700} height={100} alt='neofetch'></Image>
                <figcaption className='text-xs text-center mt-2'>i use nix, btw</figcaption>
            </figure>
        </details>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default ToolsWidget;
