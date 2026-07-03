import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TeknomarinStrip from "./components/TeknomarinStrip";
import ProblemSolution from "./components/ProblemSolution";
import FeatureGrid from "./components/FeatureGrid";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <TeknomarinStrip />
        <ProblemSolution />
        <FeatureGrid />
        <Benefits />
        <HowItWorks />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
