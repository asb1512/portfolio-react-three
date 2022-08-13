import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Noise, Pixelation } from '@react-three/postprocessing';
import Mountains from './Mountains';
import './Scene.css';

export default function Scene(props) {

  return (
    <div id="canvas-container">
      <Canvas
        shadows
        camera={{
          fov: 8,
          position: [-25, 10, 5],
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight />
        <pointLight
          position={[60, 50, -10]}
        />
        <Mountains />
        <OrbitControls />
        <EffectComposer>
          <Noise />
          <Pixelation granularity={2} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
