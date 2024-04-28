import { useRef } from "react";
import "./App.css";
import Experience from "./Experience/Experience";
import Header from "./components/Header";
import { useScroll, useSpring } from "framer-motion";
import DesignDev from "./components/sections/DesignDev";
import Photography from "./components/sections/Photography";
import Contact from "./components/sections/Contact";
import "./loader.css";

function App() {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
  });

  const scrollClamp = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 15,
    mass: 0.1,
    velocity: 0.01,
    restSpeed: 2,
  });

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://renatobicego.com/",
          url: "https://renatobicego.com/",
          name: "Renato Bicego",
          description:
            "Creative Developer & UX Designer",
        })}
      </script>
      <Header />
      
      <main
        ref={mainRef}
        className="min-h-screen w-full px-5 md:px-16 relative z-0"
      >
        <section className="mb-40 text-right sectionContainer pb-20">
          <h1 className="title mb-2 md:mb-4">Renato Bicego</h1>
          <h2 className="subtitle">Creative Developer <br className="sm:hidden" /> & UX Designer</h2>
          <p className="animate-bounce mt-6 py-2 px-4 bg-[#22222260] text-white rounded-[30px]">
            Scroll down
          </p>
        </section>
        <DesignDev />
        <Photography />
        <Contact />
        <Experience scrollProgress={scrollClamp} />
      </main>
      <footer className="relative w-full bg-[#222222]/50 flex justify-end">
        <p className="text-center text-white drop-shadow-md md:mr-16">
          "Wanderer above the sea of fog"{" "}
          <a href="https://skfb.ly/6TB7s">(https://skfb.ly/6TB7s) </a>
          by betocarrillo.
        </p>
      </footer>
    </>
  );
}

export default App;
