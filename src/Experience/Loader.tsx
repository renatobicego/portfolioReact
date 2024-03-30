/* eslint-disable react-hooks/exhaustive-deps */
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

// const Loader = ({
//   setHasLoaded,
// }: {
//   setHasLoaded: (state: boolean) => void;
// }) => {
//   const { progress } = useProgress();

//   useEffect(() => {
//     // Check if progress has reached 100
//     if (progress >= 99) {
//       // Set hasLoaded to false
//       setHasLoaded(true);
//       document.getElementById('loaderContainer')?.classList.add('!hidden')
//     }

//   }, [progress, setHasLoaded]);

//   return (
//     <Html>
//     </Html>
//   );
// };

// export default Loader;

const Loader = ({
  hasLoaded,
  setHasLoaded,
}: {
  hasLoaded: boolean;
  setHasLoaded: (state: boolean) => void;
}) => {
  const { progress } = useProgress();

  useEffect(() => {
    // Check if progress has reached 100
    if (progress >= 99) {
      setHasLoaded(true)
    }
  }, [progress]);

  return (
    <div
      className={`w-screen h-screen fixed left-0 top-0 bg-[#222222] transition-all duration-500
      ${hasLoaded ? 'opacity-0 pointer-events-none' : ''}`}
    >
      <div className="scene">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
