import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AboutMarker({ page }) {
  const markerRef = useRef();
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (page === 'about') {
      state.camera.position.lerp(vec.set(0, 0.7, 0.45), 0.15);
      state.camera.updateProjectionMatrix();
    }
  });

  return (
    <mesh ref={markerRef} position={[1, 3, 1]}>
      <coneBufferGeometry attach="geometry" args={[0.1, 0.1, 4]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}
