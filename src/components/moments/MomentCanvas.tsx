'use client'
import { useGSAP } from "@gsap/react"
import { CameraControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { ReactNode, useRef } from "react"
gsap.registerPlugin(useGSAP)

type Props = {
   component: ReactNode
}

const canvas = `bg-transparent h-full w-full`

export default function MomentCanvas(props: Props){
   const refContainer = useRef<HTMLCanvasElement>(null)

   useGSAP(() => {
      let tl = gsap.timeline({defaults: {
         duration: 1, 
         ease: 'power2.out'
      }})
      
      tl.fromTo(refContainer.current, {
         opacity: 0,
         y: 1000
      }, {
         opacity: 1,
         y: 0
      })
   })

   return (
      <Canvas camera={{position: [5, 1, 2]}} className={canvas} ref={refContainer} shadows>
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