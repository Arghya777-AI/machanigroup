import Drones from "@/components/sections/Drones";
import Footer from "@/components/Footer";

export const metadata = { title: "Drones & Electric Mobility — FGCU AI Innovation Center" };

export default function DronesPage() {
  return (
    <main className="pt-16">
      <Drones />
      <Footer />
    </main>
  );
}
