import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6 font-bold text-2xl md: max-w-[768px] mx-auto border-x-2 border-x-black dark:border-x-white">
      <div className='flex flex-col gap-2 items-center'>
        <p>THERE'S NOTHING TO SEE HERE YET.</p>
        <Link className='hover:underline' href="https://t.me/fly0utwest">tg: @fly0utwest</Link>
      </div>
    </main>
  );
}
