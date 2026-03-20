import Hero from "./components/Hero";
import Services from "./components/Services";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <Services />
      <CTA />
    </main>
  );
}
