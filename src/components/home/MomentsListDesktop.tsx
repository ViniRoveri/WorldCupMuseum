import Game from "@/domain/types/Game"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import MomentCard from "./MomentCard"

type Props = {
   redirectToMoment: Function
   selectedGame: Game | null
   selectedYear: number | null
}

const container = `fixed h-[calc(100vh_-64px)] hidden p-4 pb-0 right-[calc(50vw_-500px)] top-[64px]
md:inline-block`
const momentsListTitle = `border-b font-bold opacity-0 text-[24px]`
const momentsList = `flex flex-col gap-8 h-full items-center max-w-[500px] opacity-0 overflow-scroll pb-12 pt-6 w-full`
const momentLink = `px-4 w-full`

export default function MomentsListDesktop(props: Props){
   const transitionDuration = 0.4
   const [showedGame, setShowedGame] = useState<Game | null>(null)
   const [showedYear, setShowedYear] = useState<number | null>(null)

   const refTitle = useRef<HTMLHeadingElement>(null)
   const refList = useRef<HTMLUListElement>(null)

   useEffect(()=>{
      let tl = gsap.timeline({defaults: {
         duration: transitionDuration,
         ease: 'back.out(2)'
      }})

      if(showedGame){
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
            setShowedGame(props.selectedGame)
            setShowedYear(props.selectedYear)
         }, transitionDuration * 2 * 1000)
      }else{
         setShowedGame(props.selectedGame)
         setShowedYear(props.selectedYear)
      }
   }, [props.selectedGame])

   useEffect(()=>{
      if(showedGame){
         let tl = gsap.timeline({defaults: {
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
   }, [showedGame])

   return (
      <div className={container}>
         <h3 className={momentsListTitle} ref={refTitle}>{showedYear} - {showedGame?.title}:</h3>

         <ul className={momentsList} ref={refList}>
            {showedGame?.moments.map(moment => 
               <li className={momentLink} key={moment.title}>
                  <MomentCard moment={moment} redirectToMoment={props.redirectToMoment}/>
               </li>
            ) || <></>}
         </ul>
      </div>
   )
}