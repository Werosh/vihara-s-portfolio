import SplashScreen from '@/components/splash/SplashScreen';
import ProfileSection from '@/components/profile/ProfileSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ContactSection from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
