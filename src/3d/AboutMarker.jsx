import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AboutMarker({ pathname }) {
  const markerRef = useRef();
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (pathname === '/') {
      state.camera.position.lerp(vec.set(-25, 10, 5), 0.15);
      state.camera.updateProjectionMatrix();
    }
    if (pathname === '/about') {
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
