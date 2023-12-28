import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });
  const [sizes, setSizes] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setMousePos({ x: event.clientX / sizes.width - 0.5, y: event.clientY / sizes.height - 0.5});
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach event listener to update sizes on window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return {mousePos, sizes};
}
