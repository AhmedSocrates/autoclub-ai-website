import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TeknomarinStrip from "./components/TeknomarinStrip";
import FeatureGrid from "./components/FeatureGrid";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        <Hero />
        <TeknomarinStrip />
        <FeatureGrid />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
