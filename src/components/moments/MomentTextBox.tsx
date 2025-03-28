'use client'
import Moment from "@/domain/types/Moment"
import Accordion from "../global/Accordion"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

type Props = {
   moment: Moment
}

const container = `bottom-[16px] fixed opacity-0 right-[16px] w-[333px]
sm:w-[400px]
md:bottom-[32px] md:right-[32px] 
lg:w-[600px]`

export default function MomentTextBox({moment}: Props){
   const refContainer = useRef<HTMLDivElement>(null)

   useGSAP(() => {
      let tl = gsap.timeline({delay: 1, defaults: {
         duration: 0.5, 
         ease: "back.out(2)"
      }})

      tl.fromTo(refContainer.current, {
         opacity: 0,
         y: 100
      }, {
         opacity: 1,
         y: 0
      })
   })

   return (
      <div className={container} ref={refContainer}>
         <Accordion startOpen title={moment.title}>
            <b>{moment.minutes} -</b> {moment.text}
         </Accordion>
      </div>
   )
}