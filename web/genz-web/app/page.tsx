import GrainOverlay from "./Animations/GrainOverlay";
import Features from "./components/Features";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contribute from "./components/Contribute";

export default function Home() {
  return (
    <div className="grid-background">
      <GrainOverlay />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contribute />
    </div>
  );
}
