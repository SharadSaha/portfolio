import { lazy, Suspense } from 'react';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { SectionLoader } from './components/SectionLoader';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { HeroSection } from './sections/HeroSection';

const AboutSection = lazy(() =>
  import('./sections/AboutSection').then((module) => ({ default: module.AboutSection })),
);
const ExperienceSection = lazy(() =>
  import('./sections/ExperienceSection').then((module) => ({ default: module.ExperienceSection })),
);
const ProjectsSection = lazy(() =>
  import('./sections/ProjectsSection').then((module) => ({ default: module.ProjectsSection })),
);
const SkillsSection = lazy(() =>
  import('./sections/SkillsSection').then((module) => ({ default: module.SkillsSection })),
);
const EducationSection = lazy(() =>
  import('./sections/EducationSection').then((module) => ({ default: module.EducationSection })),
);
const ContactSection = lazy(() =>
  import('./sections/ContactSection').then((module) => ({ default: module.ContactSection })),
);

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.12),transparent_18%),radial-gradient(circle_at_100%_10%,rgba(14,165,233,0.1),transparent_20%)]" />
      <NavBar />
      <main className="flex flex-col">
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
