import ComputerVision from "@/components/sections/ComputerVision";
import Footer from "@/components/Footer";

export const metadata = { title: "Computer Vision — FGCU AI Innovation Center" };

export default function VisionPage() {
  return (
    <main className="pt-16">
      <ComputerVision />
      <Footer />
    </main>
  );
}
