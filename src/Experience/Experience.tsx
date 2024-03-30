import { Canvas } from "@react-three/fiber";
import Wanderer from "./Wanderer";
import { MotionValue } from "framer-motion";
import Loader from "./Loader";
import { useState } from "react";

const Experience = ({ scrollProgress }: { scrollProgress: MotionValue }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        className="!fixed left-0 top-0 -z-[1] !h-[100lvh]"
      >
        <Wanderer
          scrollProgress={scrollProgress}
        />
      </Canvas>
      <Loader setHasLoaded={setHasLoaded} hasLoaded={hasLoaded} />
    </>
  );
};

export default Experience;
