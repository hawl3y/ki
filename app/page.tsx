import Hero from "@/components/sections/Hero";
import Music from "@/components/sections/Music";
import LatestUpdate from "@/components/sections/LatestUpdate";
import Social from "@/components/sections/Social";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Music />
      <LatestUpdate />
      <Social />
      <Footer />
    </main>
  );
}
