import { Preload, useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState, useEffect } from "react";
import CanvasLoader from "../Loader";
import ComputerModel from "./models/ComputerModel";

function Computers({ isMobile }) {
  const { nodes, materials } = useGLTF("/models/desktop_pc/scene.gltf");

  const computerProps = useMemo(() => {
    const scale = isMobile ? 0.40 : 0.35;
    const position = isMobile ? [-0.9, -0.5, 0] : [-0.6, 0.3, 1];
    const rotation = [-0.3, 1.9, -0.2];
    return { scale, position, rotation };
  }, [isMobile]);

  // Perform some lighting optimizations
  const lightSettings = useMemo(() => ({
    intensity: 1,
    color: new THREE.Color(0x804dee),
  }), []);

  return (
    <>
      {/* Lighting Setup */}
      <hemisphereLight intensity={0.8} groundColor="black" />
      <ambientLight intensity={0.65} />
      <spotLight intensity={1} position={[0, 1.5, 0.7]} angle={0.12} />
      <pointLight intensity={2} position={[1, 1.3, 0]} color={lightSettings.color} />
      <pointLight intensity={2} position={[-1, 1.3, 1]} color={lightSettings.color} />

      {/* Camera Setup */}
      <PerspectiveCamera makeDefault position={[0, 0, -8]} fov={30} />

      {/* Orbit Controls for Interaction */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.5}  // Limit the vertical rotation to 120 degrees
        minPolarAngle={Math.PI / 2.5}  // Start the rotation from around 40 degrees
        enableDamping={true}
        dampingFactor={0.25}
        enablePan={false}
        autoRotateSpeed={1}
        autoRotate={true}
        makeDefault
      />

      {/* Computer Model */}
      <ComputerModel
        nodes={nodes}
        materials={materials}
        scale={computerProps.scale}
        position={computerProps.position}
        rotation={computerProps.rotation}
      />
    </>
  );
}

function ComputersCanvas({ isMobile }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
      className="cursor-pointer"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
