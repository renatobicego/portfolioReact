import { Canvas } from "@react-three/fiber";
import Wanderer from "./Wanderer";
import { MotionValue } from "framer-motion";

const Experience = ({scrollProgress} : {scrollProgress:  MotionValue}) => {
  return (
    <Canvas
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
      }}
      className="!fixed left-0 top-0 -z-[1] !h-[100lvh]"
    >
      <Wanderer scrollProgress={scrollProgress}/>
    </Canvas>
  );
};

export default Experience;
