'use client'
import Game from "@/domain/types/Game"
import Year from "@/domain/types/Year"
import gsap, { Bounce } from "gsap"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

type Props = {
   year: Year
}

const container = `flex flex-wrap justify-between`
const infos = `w-full 
md:max-w-2/5`
const yearInfo = `border-b w-full`
const yearTitle = `!font-title opacity-0 text-[100px]/20`
const country = `opacity-0 text-[27px]`
const roundsInfo = `border-b flex flex-column gap-3 opacity-0 p-2`
const roundTitle = `font-bold text-[22px]`
const gameTitle = `cursor-pointer flex items-center justify-between py-2 text-[18px] w-full
hover:tracking-[0.4px]`
const momentsList = `flex flex-col items-center gap-4 p-4 w-full
md:max-w-1/2`
const momentsListTitle = `font-bold text-[24px] w-full`
const momentLink = `px-2 w-full
hover:scale-104`
const momentImage = `border-2 h-[200px] mb-1 object-cover rounded-lg w-full`
const momentTitle = `text-[18px] text-center`

export default function YearMoments({year}: Props){
   const [selectedGame, setSelectedGame] = useState<Game | null>(null)
   const transitionDuration = 0.3

   const refYear = useRef<HTMLHeadingElement>(null)
   const refCountry = useRef<HTMLHeadingElement>(null)
   const refRounds = useRef<HTMLDivElement>(null)

   useEffect(()=>{
      let tl = gsap.timeline({
         scrollTrigger: {
            start: 'top center',
            toggleActions: 'restart reset play reset',
            trigger: refYear.current
         }
      })

      tl.fromTo(refYear.current, {
         opacity: 0,
         y: 30
      }, {
         duration: transitionDuration,
         ease: Bounce.easeOut,
         opacity: 1,
         y: 0
      })

      tl.fromTo(refCountry.current, {
         opacity: 0,
         y: 30
      }, {
         duration: transitionDuration,
         ease: Bounce.easeOut,
         opacity: 1,
         y: 0
      })

      tl.fromTo(refRounds.current, {
         opacity: 0,
         y: -30
      }, {
         duration: transitionDuration,
         ease: Bounce.easeOut,
         opacity: 1,
         y: 0
      })
   }, [])

   return (
      <div className={container}>
         <div className={infos}>
            <div className={yearInfo}>
               <h2 className={yearTitle} ref={refYear}>{year.year}</h2>
               <h3 className={country} ref={refCountry}>{year.country}</h3>
            </div>

            <div className={roundsInfo} ref={refRounds}>
               {year.rounds.map(round => 
                  <div className='w-full' key={round.title}>
                     <h2 className={roundTitle}>{round.title}</h2>

                     {round.games.map(game => 
                        <button className={`${gameTitle} ${game.title == selectedGame?.title ? 'font-bold' : ''}`} key={game.title} onClick={() => {
                           if(game.title == selectedGame?.title){
                              setSelectedGame(null)
                           }else{
                              setSelectedGame(game)
                           }
                        }} type='button'>
                           {game.title} <i className="ri-arrow-right-line"/>
                        </button>
                     )}
                  </div>
               )}
            </div>
         </div>
         
         {selectedGame != null ?
            <ul className={momentsList}>
               <h3 className={momentsListTitle}>Game Moments:</h3>

               {selectedGame.moments.map(moment => 
                  <li className={momentLink} key={moment.title}>
                     <Link href={`/${moment.id}`}>
                        <img className={momentImage} src={`/img/${moment.id}.png`}/>

                        <p className={momentTitle}>
                           <b>{moment.minutes}</b> - {moment.title}
                        </p>
                     </Link>
                  </li>
               )}
            </ul>
         : <></>}
      </div>
   )
}