import { useEffect, useState } from "react";

const Spotlight = () => {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle 600px at ${coords.x} ${coords.y}, rgba(255, 255, 255, 0.06), transparent 80%)`,
      }}
    />
  );
};

export default Spotlight;