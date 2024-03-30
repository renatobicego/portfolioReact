import {
  PerspectiveCameraProps,
  RootState,
  useFrame,
} from "@react-three/fiber";
import { MotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";

const Camera = (
  {
    scrollProgress,
    hasLoaded,
    setHasLoaded
  }: {
    scrollProgress: MotionValue;
    hasLoaded: boolean;
    setHasLoaded: (state: boolean) => void;
  },
  props: PerspectiveCameraProps
) => {
  const [blockCameraAnimation, setBlockCameraAnimation] = useState(true)
  const cameraGroupRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const { mousePos, sizes } = useMousePosition();
  const newCameraPosition = new THREE.Vector3();
  const lookAtVector = new THREE.Vector3();

  const lerp = (start: number, end: number, progress: number) =>
    THREE.MathUtils.lerp(start, end, progress);

  const animateCamera = (state: RootState) => {
    if (!cameraGroupRef.current) return;

    const progress = Math.min(1, state.clock.elapsedTime / 2);

    const animatedX = lerp(2, xCamPos.get(), progress);
    const animatedY = lerp(30, yCamPos.get(), progress);
    const animatedZ = lerp(30, zCamPos.get(), progress);
    newCameraPosition.set(animatedX, animatedY, animatedZ);
    cameraGroupRef.current.position.copy(newCameraPosition);
    lookAtVector.set(xCamLook.get(), yCamLook.get(), zCamLook.get());
    state.camera.lookAt(lookAtVector);

    if (progress === 1) {
      setBlockCameraAnimation(false);
      document.querySelector('header')?.classList.add('opacity-100')
    }
  };

  const handleParallax = (state: RootState) => {
    if (!cameraGroupRef.current || blockCameraAnimation) return;
    newCameraPosition.set(
      xCamPos.get() + mousePos.x,
      yCamPos.get() - mousePos.y,
      zCamPos.get()
    );
    cameraGroupRef.current.position.copy(newCameraPosition);
    lookAtVector.set(xCamLook.get(), yCamLook.get(), zCamLook.get());
    state.camera.lookAt(lookAtVector);
  };

  const xCamPos = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.98],
    [0, 0, -5, -3]
  );
  const yCamPos = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.98],
    [0, 15, 6, 1]
  );
  const zCamPos = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.98],
    [
      sizes.width > 1550 ? 9 : 20 - sizes.width / 200,
      15,
      -35,
      sizes.width > 1350 ? 5 : 10,
    ]
  );
  const xCamLook = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.98],
    [
      sizes.width > 1350 ? 1 : 4,
      3,
      sizes.width > 1020 ? 1 : -2,
      sizes.width > 1019 ? 0.2 : 1,
    ]
  );
  const yCamLook = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.98],
    [0, 1, 5, 1]
  );
  const zCamLook = useTransform(
    scrollProgress,
    [0, 0.35, 0.68, 0.98],
    [0, -2, 0, 0]
  );

  useFrame((state) => {
    animateCamera(state);
    handleParallax(state);
  });
  return (
    <group ref={cameraGroupRef}>
      <PerspectiveCamera makeDefault {...props} />
    </group>
  );
};

export default Camera;
