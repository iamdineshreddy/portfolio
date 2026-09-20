import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Builds } from "../components/Builds";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Certifications } from "../components/Certifications";
import { Leadership } from "../components/Leadership";
import { BeyondCode } from "../components/BeyondCode";
import { Journey } from "../components/Journey";
import { CurrentExploration } from "../components/CurrentExploration";
import { GitHubSection } from "../components/GitHubSection";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { PortfolioAssistant } from "../components/PortfolioAssistant";
import { RecruiterView } from "../components/RecruiterView";
import { useState } from "react";

export function Home() {
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Builds />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Leadership />
        <BeyondCode />
        <Journey />
        <CurrentExploration />
        <GitHubSection />
        <Contact onOpenRecruiter={() => setRecruiterOpen(true)} />
      </main>
      <Footer />
      <PortfolioAssistant />
      <RecruiterView open={recruiterOpen} onClose={() => setRecruiterOpen(false)} />
    </>
  );
}