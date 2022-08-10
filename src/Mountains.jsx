import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/ridges_valleys.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape002.geometry}
        material={nodes.Landscape002.material}
        scale={[1.28, 1.07, 1.28]}
      />
    </group>
  );
}

useGLTF.preload('/ridges_valleys.gltf');
