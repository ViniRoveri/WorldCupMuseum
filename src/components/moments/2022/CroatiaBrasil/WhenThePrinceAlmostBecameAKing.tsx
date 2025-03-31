/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/3d/WhenThePrinceAlmostBecameAKing.gltf -t -r public 
*/
'use client'
import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Gloves: THREE.SkinnedMesh
    Player: THREE.SkinnedMesh
    Shirt: THREE.SkinnedMesh
    Shoes: THREE.SkinnedMesh
    Shorts: THREE.SkinnedMesh
    Socks: THREE.SkinnedMesh
    Player001: THREE.SkinnedMesh
    Shirt001: THREE.SkinnedMesh
    Shoes001: THREE.SkinnedMesh
    Shorts001: THREE.SkinnedMesh
    Socks001: THREE.SkinnedMesh
    Mesh033: THREE.Mesh
    Mesh033_1: THREE.Mesh
    Bar: THREE.Mesh
    Pitch_Mark: THREE.Mesh
    Net: THREE.Mesh
    Grass: THREE.Mesh
    Bone: THREE.Bone
    Bone_1: THREE.Bone
  }
  materials: {
    Gloves: THREE.MeshStandardMaterial
    Vic: THREE.MeshStandardMaterial
    Croatia: THREE.MeshStandardMaterial
    ['Vic boots']: THREE.MeshStandardMaterial
    Neymar: THREE.MeshStandardMaterial
    Brasil: THREE.MeshStandardMaterial
    ['Ney boots']: THREE.MeshStandardMaterial
    ['Brasil bottom']: THREE.MeshStandardMaterial
    ['Ball White']: THREE.MeshStandardMaterial
    ['Ball Black']: THREE.MeshStandardMaterial
    Bar: THREE.MeshStandardMaterial
    ['Pitch Mark']: THREE.MeshStandardMaterial
    Net: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
  }
}

export default function Model() {
  const { scene } = useGLTF('/3d/WhenThePrinceAlmostBecameAKing.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult
  return (
    <group dispose={null}>
      <group position={[1.979, 0, 0.842]} rotation={[-Math.PI, 0.517, -Math.PI]} scale={0.27}>
        <primitive object={nodes.Bone} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Gloves.geometry} material={materials.Gloves} skeleton={nodes.Gloves.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Player.geometry} material={materials.Vic} skeleton={nodes.Player.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shirt.geometry} material={materials.Croatia} skeleton={nodes.Shirt.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shoes.geometry} material={materials['Vic boots']} skeleton={nodes.Shoes.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shorts.geometry} material={materials.Croatia} skeleton={nodes.Shorts.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Socks.geometry} material={materials.Croatia} skeleton={nodes.Socks.skeleton} />
      </group>
      <group position={[3.712, 0, 2.381]} rotation={[-Math.PI, 0.517, -Math.PI]} scale={0.27}>
        <primitive object={nodes.Bone_1} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Player001.geometry} material={materials.Neymar} skeleton={nodes.Player001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shirt001.geometry} material={materials.Brasil} skeleton={nodes.Shirt001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shoes001.geometry} material={materials['Ney boots']} skeleton={nodes.Shoes001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shorts001.geometry} material={materials['Brasil bottom']} skeleton={nodes.Shorts001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Socks001.geometry} material={materials['Brasil bottom']} skeleton={nodes.Socks001.skeleton} />
      </group>
      <group position={[0, 0.536, 0]} rotation={[-3.137, 0.113, -0.049]} scale={-0.009}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh033.geometry} material={materials['Ball White']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh033_1.geometry} material={materials['Ball Black']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Bar.geometry} material={materials.Bar} position={[17.335, 0, 4.572]} rotation={[-0.043, 1.458, 3.136]} scale={-0.009} />
      <mesh receiveShadow geometry={nodes.Pitch_Mark.geometry} material={materials['Pitch Mark']} position={[17.335, 0.001, 4.572]} rotation={[-0.043, 1.458, 3.136]} scale={-0.009} />
      <mesh receiveShadow geometry={nodes.Net.geometry} material={materials.Net} position={[17.335, 0, 4.572]} rotation={[-0.043, 1.458, 3.136]} scale={-0.009} />
      <mesh receiveShadow geometry={nodes.Grass.geometry} material={materials.Grass} position={[17.335, 0, 4.572]} rotation={[0, -1.571, 0]} scale={67.718} />
    </group>
  )
}

useGLTF.preload('/3d/WhenThePrinceAlmostBecameAKing.gltf')
