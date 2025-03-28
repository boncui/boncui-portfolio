'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group, Mesh, MeshStandardMaterial } from "three";

function Model() {
  const { scene } = useGLTF("/landing/model.glb");
  const modelRef = useRef<Group>(null);

  scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      (child as Mesh).material = new MeshStandardMaterial({
        color: "#2e8464",
        transparent: true,
        roughness: 0.7,
      });
    }
  });

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0005;
      modelRef.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.2;
      modelRef.current.rotation.z = Math.cos(Date.now() * 0.0001) * 0.15;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} position={[4, 2, -3]} />;
}

export default function ThreeDModel() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [15, 9, 9], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} />
        <Model />
      </Canvas>
    </div>
  );
}
