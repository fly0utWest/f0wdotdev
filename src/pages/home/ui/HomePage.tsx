import { BioSection } from '@/widgets/bio-section';
import { ContentsTable } from '@/widgets/contents-table';
import { TechStack } from '@/widgets/tech-stack';
import { ProjectsWidget } from '@/widgets/projects-widget';
import { LastfmWidget } from '@/widgets/lastfm-widget';
import ShoutboxWidget from '@/widgets/shoutbox-widget/ui/ShoutboxWidget';
import { SectionDelimeter } from '@/shared/ui';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <>
      <ContentsTable />
      <SectionDelimeter caption="Begin CV section" />
      <BioSection />
      <TechStack />
      <ProjectsWidget />
      <SectionDelimeter caption="End CV section" />
      <ShoutboxWidget />
      <LastfmWidget />
    </>
  );
}
