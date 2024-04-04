import ImageWithSideText from "./components/Callsection";
import OurClientsSection from "./components/Clients";
import FeaturesSection from "./components/Features";
import HeroSection from "./components/Hero";
import HomeFooter from "./components/HomeFooter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurClientsSection />
      <FeaturesSection />
      <ImageWithSideText />
      <HomeFooter />
    </>
  );
}

export default App;
