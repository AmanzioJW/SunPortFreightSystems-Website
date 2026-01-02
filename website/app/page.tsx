import Header from './components/header';
import { HeroSection } from './components/herosection';
import WhyChooseUs from './components/whychooseus';
import Solutions from './components/services';
import Supplychain from "./components/supplychain";
import { ContentSection } from './components/solutionscta';
import SunportSolutions from './components/sunport-solutions';
import Technology from './components/technology';
import SPFSMission from './components/spfs-mission';
import Footer from './components/footer';
export default function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <WhyChooseUs />
        <Solutions />
        <Supplychain />
        <ContentSection />
        <SunportSolutions />
        <Technology />
        <SPFSMission />
        <Footer />
    </div>
  );
}