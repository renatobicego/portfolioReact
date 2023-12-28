/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGLTF } from "@react-three/drei";

export function Model(props: any) {
  const { nodes, materials } = useGLTF("/wanderer.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.676}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: It has this property
            geometry={nodes.Object_4.geometry}
            material={materials["brush_Ink.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: It has this property
            geometry={nodes.Object_6.geometry}
            material={materials["brush_Ink.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: It has this property
            geometry={nodes.Object_8.geometry}
            material={materials["brush_Ink.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: It has this property
            geometry={nodes.Object_12.geometry}
            material={materials["brush_Marker.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: It has this property
            geometry={nodes.Object_10.geometry}
            material={materials["brush_ThickPaint.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/wanderer.glb");