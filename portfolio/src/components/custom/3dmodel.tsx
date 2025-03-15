"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { MeshStandardMaterial } from "three";

function Model() {
  const { scene } = useGLTF("/landing/model.glb"); // Ensure correct path
  const modelRef = useRef();

// Apply a new color (override existing materials)
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({ color: "#2e8464" }); // Change to any color (hex or "red", "blue")
    }
  });

  // Rotate the model slowly at odd angles
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Slow rotation
      modelRef.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.2; // Slight wobble
      modelRef.current.rotation.z = Math.cos(Date.now() * 0.0001) * 0.15; // Minor tilt
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} />;
}

export default function ThreeDModel() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Model />
      </Canvas>
    </div>
  );
}
