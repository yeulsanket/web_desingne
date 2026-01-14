import { useEffect, useState } from "react";

const Spotlight = () => {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setCoords({ x: `${e.clientX}px`, y: `${e.clientY}px` });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${coords.x} ${coords.y}, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1) 40%, transparent 70%)`,
          opacity: isMoving ? 1 : 0.7,
        }}
      />
      
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 300px at ${coords.x} ${coords.y}, rgba(255, 255, 255, 0.1), transparent 60%)`,
        }}
      />
      
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 1200px at ${coords.x} ${coords.y}, rgba(59, 130, 246, 0.05), transparent)`,
        }}
      />
    </>
  );
};

export default Spotlight;