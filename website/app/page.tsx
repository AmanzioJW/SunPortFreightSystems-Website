import Header from './components/header';
import { HeroSection } from './components/herosection';
import WhyChooseUs from './components/whychooseus';
import Solutions from './components/services';
import { ContentSection } from './components/solutionscta';
import NewsAndResources from './components/newsandresources';
import Footer from './components/footer';
export default function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <WhyChooseUs />
        <Solutions />
        <ContentSection />
        <NewsAndResources />
        <Footer />
    </div>
  );
}