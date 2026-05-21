import Students from "@/components/sections/Students";
import Footer from "@/components/Footer";

export const metadata = { title: "Student Engagement — FGCU AI Innovation Center" };

export default function StudentsPage() {
  return (
    <main className="pt-16">
      <Students />
      <Footer />
    </main>
  );
}
