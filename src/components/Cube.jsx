import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cube() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}
