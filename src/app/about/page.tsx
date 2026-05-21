import About from "@/components/sections/About";
import Footer from "@/components/Footer";

export const metadata = { title: "About — FGCU AI Innovation Center" };

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
      <Footer />
    </main>
  );
}
