import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Preload,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";
import ComputerModel from "./models/ComputerModel";

const Lighting = React.memo(() => (
  <>
    <hemisphereLight intensity={0.6} groundColor="black" />
    <ambientLight intensity={0.5} />
    <spotLight
      intensity={0.8}
      position={[0, 1.5, 0.7]}
      angle={0.12}
      penumbra={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
    <pointLight intensity={1} position={[1, 1.3, 0]} color="#804dee" />
    <pointLight intensity={1} position={[-1, 1.3, 1]} color="#804dee" />
  </>
));
Lighting.displayName = "Lighting";

const CameraSetup = React.memo(() => (
  <PerspectiveCamera makeDefault position={[0, 0, -8]} fov={30} />
));
CameraSetup.displayName = "CameraSetup";

const Controls = React.memo(() => (
  <OrbitControls
    enableZoom={false}
    maxPolarAngle={Math.PI / 1.5}
    minPolarAngle={Math.PI / 2.5}
    enableDamping
    dampingFactor={0.25}
    enablePan={false}
    autoRotate
    autoRotateSpeed={1}
    makeDefault
  />
));
Controls.displayName = "Controls";

const Computers = React.memo(({ isMobile }) => {
  const { nodes, materials } = useGLTF("/models/desktop_pc/scene.gltf");

  const computerProps = useMemo(() => {
    return isMobile
      ? { scale: 0.4, position: [-0.9, -0.5, 0], rotation: [-0.3, 1.9, -0.2] }
      : { scale: 0.35, position: [-0.6, 0.3, 1], rotation: [-0.3, 1.9, -0.2] };
  }, [isMobile]);

  return (
    <>
      <Lighting />
      <CameraSetup />
      <Controls />
      <ComputerModel
        nodes={nodes}
        materials={materials}
        scale={computerProps.scale}
        position={computerProps.position}
        rotation={computerProps.rotation}
      />
    </>
  );
});
Computers.displayName = "Computers";

function ComputersCanvas({ isMobile }) {
  return (
    <Canvas
      dpr={[1, 1.5]} 
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
        antialias: false, 
      }}
      className="cursor-pointer"
      performance={{ min: 0.5, max: 1, debounce: { scroll: 50, resize: 50 } }} 
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

ComputersCanvas.displayName = "ComputersCanvas";

export default React.memo(ComputersCanvas);
