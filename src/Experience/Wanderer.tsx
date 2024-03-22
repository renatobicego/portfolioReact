
import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { PerspectiveCameraProps } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { BlendFunction } from "postprocessing";
import { Suspense, useState } from "react";
import Loader from "./Loader";
import { Model } from "./Model";
import Camera from "./Camera";

const Wanderer = (
  { scrollProgress }: { scrollProgress: MotionValue },
  props: PerspectiveCameraProps
) => {
  const [hasLoaded, setHasLoaded] = useState(false);

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
        setHasLoaded={setHasLoaded}
        hasLoaded={hasLoaded}
        {...props}
        scrollProgress={scrollProgress}
      />
      <Suspense fallback={<Loader setHasLoaded={setHasLoaded} />}>
        <Model />
      </Suspense>
    </>
  );
};

export default Wanderer;
