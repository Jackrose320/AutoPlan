import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0xffffff, // White halo
          backgroundColor: 0xe3ff, // Light cyan background
          xOffset: 0, // Horizontal offset
          yOffset: 0, // Vertical offset
          size: 1.5, // Halo size
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ minHeight: "100vh", position: "relative" }}>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default VantaBackground;
