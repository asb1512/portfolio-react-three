import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  EffectComposer,
  Noise,
  Pixelation,
  Grid,
  Glitch,
} from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import Mountains from './Mountains';
import './Scene.css';

export default function Scene(props) {
  const scale = {
    min: 0.1,
    max: 4,
    value: 2.2,
  };

  return (
    <div className="canvas-cntr">
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
          <Pixelation granularity={2} />
          <Noise opacity={0.7} />
          <Grid scale={scale} />
          <Glitch
            delay={[1.5, 3.5]} // min and max glitch delay
            duration={[0.2, 0.6]} // min and max glitch duration
            strength={[0.3, 0.4]} // min and max glitch strength
            // mode={GlitchMode.SPORADIC} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.95} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
