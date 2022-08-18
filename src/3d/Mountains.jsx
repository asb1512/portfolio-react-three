import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model({ page }) {
  const { nodes, materials } = useGLTF('/ridges_valleys.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (page === 'home') {
      meshRef.current.rotation.y = (clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={meshRef} dispose={null} position={[0, -1.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape002.geometry}
        material={nodes.Landscape002.material}
        scale={[4.28, 4.07, 4.28]}
      />
    </group>
  );
}

useGLTF.preload('/ridges_valleys.gltf');
