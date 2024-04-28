import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { PerspectiveCameraProps } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { BlendFunction } from "postprocessing";
import { Suspense } from "react";
import { Model } from "./Model";
import Camera from "./Camera";

const Wanderer = (
  {
    hasLoaded,
    scrollProgress,
  }: {
    hasLoaded: boolean;
    scrollProgress: MotionValue;
  },
  props: PerspectiveCameraProps
) => {
  return (
    <>
      <EffectComposer>
        <ToneMapping
          blendFunction={BlendFunction.SOFT_LIGHT}
          adaptive={true}
          resolution={512}
          whitePoint={2}
          maxLuminance={300.0}
          averageLuminance={3}
          adaptationRate={1}
        />
      </EffectComposer>
      <color attach={"background"} args={["#C2CEEA"]} />
      <Camera
        {...props}
        scrollProgress={scrollProgress}
        hasLoaded={hasLoaded}
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </>
  );
};

export default Wanderer;
