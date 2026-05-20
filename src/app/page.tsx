import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyFGCU from "@/components/WhyFGCU";
import EcosystemWheel from "@/components/EcosystemWheel";
import InnovationPipeline from "@/components/InnovationPipeline";
import HumanoidRobotics from "@/components/HumanoidRobotics";
import LongevityHealthspan from "@/components/LongevityHealthspan";
import ImmersiveTech from "@/components/ImmersiveTech";
import AIServices from "@/components/AIServices";
import DronesElectricMobility from "@/components/DronesElectricMobility";
import StudentsHub from "@/components/StudentsHub";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyFGCU />
        <EcosystemWheel />
        <InnovationPipeline />
        <HumanoidRobotics />
        <LongevityHealthspan />
        <ImmersiveTech />
        <AIServices />
        <DronesElectricMobility />
        <StudentsHub />
        <About />
      </main>
      <Footer />
    </>
  );
}
