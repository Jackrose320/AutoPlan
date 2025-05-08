import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min";

const VantaBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0); // Added this + import useState
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      // <-- Added this conditional
      RINGS({
        THREE: THREE,
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 0.5,
        scaleMobile: 1.0,
        backgroundColor: 0x0,
        color: 0x0,
      });
    }

    return () => {
      if (vantaEffect) {
        // <-- Used vantaEffect here
        vantaEffect.destroy();
      }
    };
  }, []);

  // **Render Logic**
  const renderContent = () => {
    return (
      <div
        ref={vantaRef}
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          {children ?? (
            <h2 style={{ textAlign: "center", color: "#fff" }}>
              Vanta Background Active
            </h2>
          )}
        </div>
      </div>
    );
  };

  return renderContent();
};

export default VantaBackground;
