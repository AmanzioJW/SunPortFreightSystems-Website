import Header from './components/header';
import { HeroSection } from './components/herosection';
import WhyChooseUs from './components/whychooseus';
import TrackSection from './components/tracksec';
import Solutions from './components/services';
import { ContentSection } from './components/solutionscta';
import Technology from './components/technology';
import SPFSMission from './components/spfs-mission';
import Footer from './components/footer';
export default function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <WhyChooseUs />
        <TrackSection />
        <Solutions />
        <ContentSection />
        <Technology />
        <SPFSMission />
        <Footer />
    </div>
  );
}