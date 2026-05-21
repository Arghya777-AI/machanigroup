import Robotics from "@/components/sections/Robotics";
import Footer from "@/components/Footer";

export const metadata = { title: "Humanoid Robotics — FGCU AI Innovation Center" };

export default function RoboticsPage() {
  return (
    <main className="pt-16">
      <Robotics />
      <Footer />
    </main>
  );
}
