import AIServices from "@/components/sections/AIServices";
import Footer from "@/components/Footer";

export const metadata = { title: "AI Services & Agents — FGCU AI Innovation Center" };

export default function AIServicesPage() {
  return (
    <main className="pt-16">
      <AIServices />
      <Footer />
    </main>
  );
}
