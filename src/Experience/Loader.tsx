/* eslint-disable react-hooks/exhaustive-deps */
import { Html, useProgress } from "@react-three/drei";
import { useContext, useEffect } from "react";
import { ModelLoadedContext } from "../ModelLoadedContext";
const Loader = ({
  setHasLoaded,
}: {
  setHasLoaded: (state: boolean) => void;
}) => {
  const { progress } = useProgress();
  const {changeState} = useContext(ModelLoadedContext)

  useEffect(() => {
    // Check if progress has reached 100
    if (progress >= 98) {
      // Set hasLoaded to false
      setHasLoaded(true);
      changeState(true)
    }
  }, [progress, setHasLoaded]);
  
  return (
    <Html>
    </Html>
  );
};

export default Loader;
