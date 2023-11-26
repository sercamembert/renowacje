import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Opinions from "@/components/Opinions";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Opinions />
      <Contact />
    </div>
  );
}
