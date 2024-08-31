import { BioSection } from '@/widgets/bio-section';
import { ContentsTable } from '@/widgets/contents-table';
import { TechStack } from '@/widgets/tech-stack';
import { ProjectsWidget } from '@/widgets/projects-widget';

export default function HomePage() {
  return (
    <>
      <pre className="text-lg text-center whitespace-pre-wrap">{`
┓ •••   ┏┓
┣┓┓┓┓  • ┫
┛┗┗┗┗  •┗┛
          
`}</pre>
      <ContentsTable />
      <BioSection />
      <TechStack />
      {/* <ProjectsWidget /> */}
    </>
  );
}
