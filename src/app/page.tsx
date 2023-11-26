import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
    </div>
  );
}
