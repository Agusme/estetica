import Hero from "./components/Hero";
import Services from "./components/Services";
import CTA from "./components/CTA";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <CTA />
      </FadeIn>
    </main>
  );
}
