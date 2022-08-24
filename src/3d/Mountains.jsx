import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model({ pathname }) {
  const [color, setColor] = useState('#FFF');
  const { nodes } = useGLTF('/ridges_valleys.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (pathname === '/') {
      meshRef.current.rotation.y = (clock.getElapsedTime()) * 0.06;
    }
  });

  // set mesh color based on current 'page'
  useEffect(() => {
    switch (pathname) {
      case '/':
        setColor('#FFF');
        break;
      case '/about':
        setColor('red');
        break;
      default: 
        setColor('#FFF');
        break;
    }
  }, [pathname]);

  return (
    <group
      ref={meshRef}
      dispose={null}
      position={[0, -1.5, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape002.geometry}
        material={nodes.Landscape002.material}
        material-color={color}
        scale={[4.28, 4.07, 4.28]}
      />
    </group>
  );
}

useGLTF.preload('/ridges_valleys.gltf');
