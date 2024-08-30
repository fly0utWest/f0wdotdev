import { BioSection } from '@/widgets/bio-section';
import { ContentsTable } from '@/widgets/contents-table';
import { TechStack } from '@/widgets/tech-stack';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 pt-4 pb-10 font-bold text-2xl border-x-0 md:border-x-2 border-x-black dark:border-x-white">
      <pre className="text-lg whitespace-pre-wrap">{`
┓ •••   ┏┓
┣┓┓┓┓  • ┫
┛┗┗┗┗  •┗┛
          
`}</pre>
      <ContentsTable />
      <BioSection />
      <TechStack />
    </main>
  );
}
