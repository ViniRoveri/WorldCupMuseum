import Game from "@/domain/types/Game"
import gsap, { Bounce } from "gsap"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Year from "@/domain/types/Year"
gsap.registerPlugin(ScrollTrigger)

type Props = {
   selectedGame: Game | null
   selectedYear: number | null
   setSelectedGame: Dispatch<SetStateAction<Game | null>>
   setSelectedYear: Dispatch<number | null>
   year: Year
}

const yearContainer = `w-full`
const yearInfo = `border-b w-full`
const yearTitle = `!font-title opacity-0 text-[100px]/27`
const country = `opacity-0 text-[27px]`
const roundsInfo = `flex flex-col gap-3 opacity-0 p-2`
const roundTitle = `font-bold text-[22px]`
const gameTitle = `cursor-pointer flex items-center justify-between py-2 text-[18px] w-full
hover:tracking-[0.4px]`

export default function YearInTimeline(props: Props){
   const transitionDuration = 0.4

   const refContainer = useRef<HTMLDivElement>(null)
   const refYear = useRef<HTMLHeadingElement>(null)
   const refCountry = useRef<HTMLHeadingElement>(null)
   const refRounds = useRef<HTMLDivElement>(null)

   useEffect(()=>{
      let tl = gsap.timeline({
         defaults: {
            duration: transitionDuration,
            ease: 'back.out(2)'
         },
         scrollTrigger: {
            start: 'top center',
            toggleActions: 'restart reverse play reverse',
            trigger: refContainer.current
         }
      })

      tl.fromTo(refYear.current, {
         opacity: 0,
         y: 30
      }, {
         opacity: 1,
         y: 0
      })

      tl.fromTo(refCountry.current, {
         opacity: 0,
         y: 30
      }, {
         opacity: 1,
         y: 0
      })

      tl.fromTo(refRounds.current, {
         opacity: 0,
         y: -30
      }, {
         opacity: 1,
         y: 0
      })
   }, [])

   return (
      <div className={yearContainer} key={props.year.year} ref={refContainer}>
         <div className={yearInfo}>
            <h2 className={yearTitle} ref={refYear}>{props.year.year}</h2>
            <h3 className={country} ref={refCountry}><i className="ri-map-pin-2-line"/> {props.year.country}</h3>
         </div>

         <div className={roundsInfo} ref={refRounds}>
            {props.year.rounds.map(round => 
               <div className='w-full' key={round.title}>
                  <h2 className={roundTitle}>{round.title}</h2>

                  {round.games.map(game => {
                     const gameIsSelected = game.title == props.selectedGame?.title && props.year.year == props.selectedYear

                     return (
                        <button className={`${gameTitle} ${gameIsSelected ? 'font-bold' : ''}`} key={game.title} onClick={() => {
                           if(gameIsSelected){
                              props.setSelectedGame(null)
                              props.setSelectedYear(null)
                           }else{
                              props.setSelectedGame(game)
                              props.setSelectedYear(props.year.year)
                           }
                        }} style={{
                           transition: 'font-weight 0.3s ease-in-out, letter-spacing 0.3s ease-in-out'
                        }} type='button'>
                           {game.title} <i className="ri-arrow-right-line"/>
                        </button>
                     )
                  })}
               </div>
            )}
         </div>
      </div>
   )
}