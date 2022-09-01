import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model({ pathname }) {
  const [color, setColor] = useState('#FFF');
  const { nodes } = useGLTF('/ridges_valleys.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    switch (pathname) {
      case '/':
        meshRef.current.rotation.y = (clock.getElapsedTime()) * 0.06;
      default:
        break;
    }
  }, [pathname]);

  // set mesh color based on current 'page'
  useEffect(() => {
    switch (pathname) {
      case '/':
        setColor('#FFFFFF');
        break;
      case '/about':
        setColor('red');
        break;
      case '/work':
        setColor('yellow')
        break;
      case '/contact':
        setColor('blue');
        break;
      default: 
        setColor('#FFFFFF');
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
