import React from 'react';
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import rubrikIso from './Rubik_Iso_Regular.json';

export default function WelcomeText() {
  const font = new FontLoader().parse(rubrikIso);
  extend({ TextGeometry });
  const fontOptions = {
    font,
    size: 0.25,
    height: 0.25,
  };

  return (
    <mesh>
      <textGeometry attach="geometry" args={['Andrew Bourgeois', fontOptions]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
