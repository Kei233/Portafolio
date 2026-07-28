import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe.tsx";
import { Projects } from "./components/Projects.tsx";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Background } from "./components/Background";
import { AnimateSection } from "./components/AnimateSection.tsx";
import { SkillTree } from "./components/skill-tree/SkillTree.tsx";

import { NodeProvider } from "./components/skill-tree/NodeProvider.tsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#030303] via-[#010101] to-black text-silver-100">
      <main className="relative w-full pb-12">
        <Background />
        <Hero />
        <Projects />
        <AboutMe />
        <NodeProvider>
          <SkillTree />
        </NodeProvider>
        <AnimateSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
