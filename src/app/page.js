import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Marquee } from "@/sections/Marquee";
import { About } from "@/sections/About";
import { Issues } from "@/sections/Issues";
import { Roadmap } from "@/sections/Roadmap";
import { Endorsements } from "@/sections/Endorsements";
import { Events } from "@/sections/Events";
import { GetInvolved } from "@/sections/GetInvolved";
import { News } from "@/sections/News";
import { Newsletter } from "@/sections/Newsletter";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Marquee />
        <About />
        <Issues />
        <Roadmap />
        <Endorsements />
        <Events />
        <GetInvolved />
        <News />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
