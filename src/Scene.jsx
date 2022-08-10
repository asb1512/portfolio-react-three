import React from 'react';
import { Canvas } from '@react-three/fiber';
import Mountains from './Mountains';

export default function Scene() {
  return (
    <div id="canvas-container">
      <Canvas shadows camera={{ position: [-10, 10, 10], fov: 15 }}>
        <ambientLight />
        <pointLight position={[-10, 10, -10]} castShadow />
        <Mountains />
      </Canvas>
    </div>
  )
}
