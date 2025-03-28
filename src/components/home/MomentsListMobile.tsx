import Game from "@/domain/types/Game"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import gsap from 'gsap'
import MomentCard from "./MomentCard"

type Props = {
   redirectToMoment: Function
   selectedGame: Game | null
   selectedYear: number | null
   setSelectedGame: Dispatch<SetStateAction<Game | null>>
}

const container = `bg-vr-lightYellow border-t fixed h-[calc(100vh_-64px)] left-0 p-4 top-[64px] w-screen
md:hidden`
const title = `border-b font-bold opacity-0 py-2 text-[22px] text-center`
const momentsList = `flex flex-col gap-8 h-full items-center opacity-0 overflow-scroll pb-24 pt-6 w-full`
const momentLink = `px-4 w-full`

export default function MomentsListMobile(props: Props){
   const transitionDuration = 0.4
   
   const [isOpen, setIsOpen] = useState(false)

   const refTitle = useRef<HTMLHeadingElement>(null)
   const refList = useRef<HTMLUListElement>(null)

   function triggerClosing(){
      let tl = gsap.timeline({defaults: {
         duration: transitionDuration,
         ease: 'back.out(2)'
      }})

      tl.fromTo(refTitle.current, {
         opacity: 1,
         x: 0
      }, {
         opacity: 0,
         x: -30
      })

      tl.fromTo(refList.current, {
         opacity: 1,
         x: 0
      }, {
         opacity: 0,
         x: -30
      })

      setTimeout(() => {
         props.setSelectedGame(null)
      }, transitionDuration * 2 * 1000)
   }

   useEffect(()=>{
      if(props.selectedGame){
         setIsOpen(true)
      }else{
         setIsOpen(false)
      }
   }, [props.selectedGame])

   useEffect(()=>{
      if(isOpen){
         let tl = gsap.timeline({delay: 0.4, defaults: {
            duration: transitionDuration,
            ease: 'back.out(2)'
         }})

         tl.fromTo(refTitle.current, {
            opacity: 0,
            x: -30
         }, {
            opacity: 1,
            x: 0
         })

         tl.fromTo(refList.current, {
            opacity: 0,
            x: -30
         }, {
            opacity: 1,
            x: 0
         })
      }
   }, [isOpen])

   return (
      <div className={container} style={{transform: isOpen ? 'translateY(0)' : 'translateY(100vh)', 
         transition: 'transform 0.3s ease-in-out'
      }}>
         <div className="flex items-center justify-between">
            <button onClick={() => triggerClosing()} type='button'>
               <i className="ri-close-large-line text-[30px]"></i>
            </button>

            <h3 className="font-bold text-[24px]">{props.selectedYear}</h3>
         </div>
         
         <h3 className={title} ref={refTitle}>{props.selectedGame?.title}</h3>

         <ul className={momentsList} ref={refList}>
            {props.selectedGame?.moments.map(moment => 
               <li className={momentLink} key={moment.title}>
                  <MomentCard moment={moment} redirectToMoment={props.redirectToMoment}/>
               </li>
            ) || <></>}
         </ul>
      </div>
   )
}