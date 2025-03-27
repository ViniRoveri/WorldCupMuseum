'use client'
import { CameraControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ReactNode } from "react"

type Props = {
   component: ReactNode
}

const canvas = `bg-transparent h-full w-full`

export default function MomentCanvas(props: Props){
   return (
      <Canvas camera={{position: [5, 1, 2]}} className={canvas} shadows>
         {props.component}

         <CameraControls />

         <directionalLight castShadow intensity={1.77} position={[100, 100, -100]}>
            <orthographicCamera attach='shadow-camera' args={[-16, 16, 16, -16]}/>
         </directionalLight>

         <directionalLight castShadow intensity={1} position={[100, 100, 100]}>
            <orthographicCamera attach='shadow-camera' args={[-16, 16, 16, -16]}/>
         </directionalLight>

         <hemisphereLight intensity={0.16}/>
      </Canvas> 
   )
}