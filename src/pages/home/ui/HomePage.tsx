import Link from 'next/link';
import Image from 'next/image';
import { BioSection } from '@/widgets/bio-section';
import { NavSide } from '@/shared';

export default function HomePage() {
  return (
    <div className='flex flex-row md:max-w-[768px] md:mx-auto min-h-screen'>
      <main className="flex flex-col items-center px-6 pt-4 pb-20 font-bold text-2xl border-x-0 md:border-x-2 border-x-black dark:border-x-white">
        <pre className="text-lg whitespace-pre-wrap">{`
┓ •••   ┏┓
┣┓┓┓┓  • ┫
┛┗┗┗┗  •┗┛
          
`}</pre>
        <BioSection />
      </main>
      <NavSide />
    </div>
  );
}
