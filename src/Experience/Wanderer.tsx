import { PerspectiveCamera } from "@react-three/drei";
import { PerspectiveCameraProps, useFrame } from "@react-three/fiber";
import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { MotionValue, useTransform } from "framer-motion";
import { BlendFunction } from "postprocessing";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import useMousePosition from "../utils/useMousePosition";
import Loader from "./Loader";
import { Model } from "./Model";
const Wanderer = (
  { scrollProgress }: { scrollProgress: MotionValue },
  props: PerspectiveCameraProps
) => {
  const cameraGroupRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const { mousePos, sizes } = useMousePosition();
  const [hasLoaded, setHasLoaded] = useState(false)
  const xCamPos = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.95],
    [0, 0, -5, -3]
  );
  const yCamPos = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.95],
    [0, 15, 6, 1]
  );
  const zCamPos = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.95],
    [
      sizes.width > 1550 ? 9 : 20 - sizes.width / 200,
      15,
      -35,
      sizes.width > 1350 ? 5 : 10,
    ]
  );
  const xCamLook = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.95],
    [
      sizes.width > 1350 ? 1 : 4,
      3,
      sizes.width > 1020 ? 1 : -2,
      sizes.width > 1019 ? 0.2 : 1,
    ]
  );
  const yCamLook = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.95],
    [0, 1, 5, 1]
  );
  const zCamLook = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.95],
    [0, -2, 0, 0]
  );

  useFrame((state) => {
    if(cameraGroupRef.current && hasLoaded){
      // Calculate progress based on time
      const progress = Math.min(1, state.clock.elapsedTime / 1.5);

      // Interpolate between random position and actual position
      const animatedX = THREE.MathUtils.lerp(2, xCamPos.get(), progress);
      const animatedY = THREE.MathUtils.lerp(30, yCamPos.get(), progress);
      const animatedZ = THREE.MathUtils.lerp(30, zCamPos.get(), progress);

      // Set the new camera position
      const newCameraPosition = new THREE.Vector3(animatedX, animatedY, animatedZ);
      cameraGroupRef.current.position.copy(newCameraPosition);

      // LookAt animation logic
      const lookAtVector = new THREE.Vector3(
        xCamLook.get(),
        yCamLook.get(),
        zCamLook.get()
      );
      state.camera.lookAt(lookAtVector);

      // Check if the animation is complete
      if (progress === 1) {
        setHasLoaded(false); // Animation complete, set hasLoaded to false
      }
    }
    if (cameraGroupRef.current && !hasLoaded) {
      const parallaxX = mousePos.x;
      const parallaxY = -mousePos.y;
      const newCameraPosition = new THREE.Vector3(
        xCamPos.get() + parallaxX,
        yCamPos.get() + parallaxY,
        zCamPos.get()
      );
      cameraGroupRef.current.position.copy(newCameraPosition);
      const lookAtVector = new THREE.Vector3(
        xCamLook.get(),
        yCamLook.get(),
        zCamLook.get()
      );
      state.camera.lookAt(lookAtVector);
    }
  });

  return (
    <>
      <EffectComposer>
        <ToneMapping
          blendFunction={BlendFunction.SOFT_LIGHT} // blend mode
          adaptive={true} // toggle adaptive luminance map usage
          resolution={512} // texture resolution of the luminance map
          whitePoint={2}
          maxLuminance={300.0} // maximum luminance
          averageLuminance={3} // average luminance
          adaptationRate={1} // luminance adaptation rate
        />
      </EffectComposer>
      <color attach={"background"} args={["#C2CEEA"]} />
      <group ref={cameraGroupRef}>
        <PerspectiveCamera makeDefault {...props} />
      </group>
      {/* <OrbitControls /> */}
      <Suspense fallback={<Loader setHasLoaded={setHasLoaded}/>}>
        <Model />
      </Suspense>
    </>
  );
};

export default Wanderer;
