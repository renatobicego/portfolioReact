import {
  PerspectiveCameraProps,
  RootState,
  useFrame,
} from "@react-three/fiber";
import { MotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import * as THREE from "three";
import { Html, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}

const Camera = (
  {
    scrollProgress,
    hasLoaded,
  }: {
    scrollProgress: MotionValue;
    hasLoaded: boolean;
  },
  props: PerspectiveCameraProps
) => {
  const [blockCameraAnimation, setBlockCameraAnimation] = useState(true);
  const cameraGroupRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const { mousePos, sizes } = useMousePosition();
  const newCameraPosition = new THREE.Vector3();
  const lookAtVector = new THREE.Vector3();
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

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
      document.querySelector("header")?.classList.add("opacity-100");
    }
  };

  const handleParallax = (state: RootState) => {
    if (!cameraGroupRef.current || blockCameraAnimation) return;
    newCameraPosition.set(
      xCamPos.get() + mousePos.x + xValue,
      yCamPos.get() - mousePos.y - yValue,
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

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      if (beta !== null && gamma !== null) {
        setXValue(
          gsap.utils.clamp(
            -2,
            2,
            isLandscape
              ? gsap.utils.mapRange(-45, 45, -2, 2, beta)
              : gsap.utils.mapRange(-45, 45, beta >= 90 ? 2 : -2, beta >= 90 ? -2 : 2, gamma)
          )
        );
        setYValue(
          gsap.utils.clamp(
            -4,
            4,
            isLandscape
              ? gsap.utils.mapRange(-20, 200, 4, -4, Math.abs(gamma))
              : gsap.utils.mapRange(-20, 200, 4, -4, beta)
          )
        );
      }
    };
    const initiate = () => {
      const requestPermission = (
        DeviceOrientationEvent as unknown as DeviceOrientationEventiOS
      ).requestPermission;
      const iOS = typeof requestPermission === "function";
      if (iOS) {
        Promise.all([requestPermission()]).then((results) => {
          if (results.every((result: string) => result === "granted")) {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        });
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };
    document
      .querySelector("main")
      ?.addEventListener("click", initiate, { once: true });
    return () => {
      document.querySelector("main")?.removeEventListener("click", initiate);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  useFrame((state) => {
    if (!hasLoaded) {
      state.clock.stop();
    }
    if (hasLoaded && blockCameraAnimation) {
      if (state.clock.elapsedTime < 0.001) {
        state.clock.start();
      }
      animateCamera(state);
    }

    handleParallax(state);
  });
  return (
    <group ref={cameraGroupRef}>
      <PerspectiveCamera makeDefault {...props} />
      <Html className="fixed left-4 top-4">
        {xValue} {yValue}
      </Html>
    </group>
  );
};

export default Camera;
