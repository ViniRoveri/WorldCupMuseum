/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/3d/TheNeterlandsLastResort.gltf -t -r public 
*/
'use client'
import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Player: THREE.SkinnedMesh
    Shirt: THREE.SkinnedMesh
    Shoes: THREE.SkinnedMesh
    Shorts: THREE.SkinnedMesh
    Socks: THREE.SkinnedMesh
    Gloves001: THREE.SkinnedMesh
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
    Skin: THREE.MeshStandardMaterial
    Netherlands: THREE.MeshStandardMaterial
    ['Weg boots']: THREE.MeshStandardMaterial
    Dibu: THREE.MeshStandardMaterial
    Argentina: THREE.MeshStandardMaterial
    ['Ball White']: THREE.MeshStandardMaterial
    ['Ball Black']: THREE.MeshStandardMaterial
    Bar: THREE.MeshStandardMaterial
    ['Pitch Mark']: THREE.MeshStandardMaterial
    Net: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
  }
}

export default function Model() {
  const { scene } = useGLTF('/3d/TheNeterlandsLastResort.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult
  return (
    <group dispose={null}>
      <group position={[14.018, 0, -0.856]} rotation={[Math.PI, -1.54, Math.PI]} scale={0.27}>
        <primitive object={nodes.Bone} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Player.geometry} material={materials.Skin} skeleton={nodes.Player.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shirt.geometry} material={materials.Netherlands} skeleton={nodes.Shirt.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shoes.geometry} material={materials['Weg boots']} skeleton={nodes.Shoes.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shorts.geometry} material={materials.Netherlands} skeleton={nodes.Shorts.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Socks.geometry} material={materials.Netherlands} skeleton={nodes.Socks.skeleton} />
      </group>
      <group position={[12.072, 0, -0.502]} rotation={[0, 1.472, 0]} scale={0.27}>
        <primitive object={nodes.Bone_1} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Gloves001.geometry} material={materials.Dibu} skeleton={nodes.Gloves001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Player001.geometry} material={materials.Skin} skeleton={nodes.Player001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shirt001.geometry} material={materials.Argentina} skeleton={nodes.Shirt001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shoes001.geometry} material={materials.Dibu} skeleton={nodes.Shoes001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Shorts001.geometry} material={materials.Argentina} skeleton={nodes.Shorts001.skeleton} />
        <skinnedMesh castShadow receiveShadow geometry={nodes.Socks001.geometry} material={materials.Argentina} skeleton={nodes.Socks001.skeleton} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Bar.geometry} material={materials.Bar} position={[14.047, 0, -0.856]} rotation={[-0.043, 1.458, 3.136]} scale={-0.009} />
      <mesh receiveShadow geometry={nodes.Pitch_Mark.geometry} material={materials['Pitch Mark']} position={[14.047, 0.001, -0.856]} rotation={[-0.043, 1.458, 3.136]} scale={-0.009} />
      <mesh receiveShadow geometry={nodes.Net.geometry} material={materials.Net} position={[14.047, 0, -0.856]} rotation={[-0.043, 1.458, 3.136]} scale={-0.009} />
      <mesh receiveShadow geometry={nodes.Grass.geometry} material={materials.Grass} position={[14.047, 0, -0.856]} rotation={[0, -1.571, 0]} scale={67.718} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh033.geometry} material={materials['Ball White']} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh033_1.geometry} material={materials['Ball Black']} />
    </group>
  )
}

useGLTF.preload('/3d/TheNeterlandsLastResort.gltf')
