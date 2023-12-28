import { useContext, useRef } from "react";
import "./App.css";
import Experience from "./Experience/Experience";
import Header from "./components/Header";
import { useScroll, useSpring } from "framer-motion";
import DesignDev from "./components/sections/DesignDev";
import Photography from "./components/sections/Photography";
import Contact from "./components/sections/Contact";
import { ModelLoadedContext } from "./ModelLoadedContext";
import "./loader.css";
function App() {
  const mainRef = useRef(null);
  const { modelLoaded } = useContext(ModelLoadedContext);
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
      <Header />
      {!modelLoaded && (
        <div
          className={`w-screen h-screen absolute z-[1000] left-0 top-0 bg-[#222222] `}
        >
          <div className="scene">
            <div className="loader"></div>
          </div>
        </div>
      )}
      <main
        ref={mainRef}
        className="min-h-screen w-full px-8 md:px-16 relative z-0"
      >
        <section className="mb-40 text-right sectionContainer pb-20">
          <h1 className="title mb-2 md:mb-4">Renato Bicego</h1>
          <h2 className="subtitle">Creative Developer & UX Designer</h2>
          <p className="animate-bounce mt-6 py-2 px-4 bg-[#22222260] text-white rounded-[30px]">
            Scroll down
          </p>
        </section>
        <DesignDev />
        <Photography />
        <Contact />
        <Experience scrollProgress={scrollClamp} />
      </main>
      <footer className="relative z-10 w-full md:w-1/2 lg:w-1/3 float-right md:mr-16">
        <p className="text-center text-white drop-shadow-md">
          "Wanderer above the sea of fog"{" "}
          <a href="https://skfb.ly/6TB7s">(https://skfb.ly/6TB7s)</a>
          by betocarrillo is licensed under Creative Commons
          Attribution-ShareAlike
          <a href="http://creativecommons.org/licenses/by-sa/4.0/">
            (http://creativecommons.org/licenses/by-sa/4.0/)
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
