import React, { Suspense, useEffect, useState } from "react";
import { Canvas, events } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} />

      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.65}
        position={isMobile ? [0, -3, -0.5] : [-0.5, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuerry = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuerry.matches);

    const handleMediaQuerryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuerry.addEventListener("change", handleMediaQuerryChange);

    return () => {
      mediaQuerry.removeEventListener("change", handleMediaQuerryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
