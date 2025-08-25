import GrainOverlay from "./Animations/GrainOverlay";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="grid-background">
      <GrainOverlay />
      <Navbar />
      <Hero />
    </div>
  );
}
