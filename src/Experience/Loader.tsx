/* eslint-disable react-hooks/exhaustive-deps */
import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

const Loader = ({
  setHasLoaded,
}: {
  setHasLoaded: (state: boolean) => void;
}) => {
  const { progress } = useProgress();

  useEffect(() => {
    // Check if progress has reached 100
    if (progress >= 99) {
      // Set hasLoaded to false
      setHasLoaded(true);
      document.getElementById('loaderContainer')?.classList.add('!hidden')
    }
    
  }, [progress, setHasLoaded]);
  
  return (
    <Html>
    </Html>
  );
};

export default Loader;
