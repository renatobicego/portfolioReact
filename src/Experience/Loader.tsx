/* eslint-disable react-hooks/exhaustive-deps */
import { useProgress } from "@react-three/drei";

const Loader = ({
  hasLoaded,
  setHasLoaded,
}: {
  hasLoaded: boolean;
  setHasLoaded: (state: boolean) => void;
}) => {
  const { progress } = useProgress();

  return (
    <div
      className={`w-screen h-screen fixed left-0 top-0 bg-[#222222] transition-all duration-500
      ${hasLoaded ? "opacity-0 pointer-events-none" : ""}`}
    >
      <div className="scene">
        <div className="loader"></div>
      </div>
      <button
        disabled={progress < 99}
        onClick={() => setHasLoaded(true)}
        className={`absolute bottom-[30%] left-1/2 -translate-x-1/2 text-white`}
      >
        {progress < 99 ? "Loading..." : "Enter"}
      </button>
    </div>
  );
};

export default Loader;
