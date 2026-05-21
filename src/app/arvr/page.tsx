import ARVR from "@/components/sections/ARVR";
import Footer from "@/components/Footer";

export const metadata = { title: "AR / VR Clinical Training — FGCU AI Innovation Center" };

export default function ARVRPage() {
  return (
    <main className="pt-16">
      <ARVR />
      <Footer />
    </main>
  );
}
