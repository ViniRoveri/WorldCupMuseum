'use client'
import Game from "@/domain/types/Game"
import Year from "@/domain/types/Year"
import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
   year: Year
}

const container = `flex flex-wrap`
const infos = `w-full 
md:max-w-1/2`
const yearInfo = `border-b w-full`
const yearTitle = `!font-title text-[100px]/17`
const country = `text-[27px]`
const roundsInfo = `border-b flex flex-column gap-3 p-2`
const roundTitle = `font-bold text-[22px]`
const gameTitle = `cursor-pointer flex items-center justify-between py-2 text-[18px] w-full
hover:tracking-[0.4px]`
const momentsList = `flex flex-col items-center gap-2 w-full
md:max-w-1/2`
const momentLink = `px-2 py-4
hover:scale-104`
const momentImage = `border-2 h-[200px] mb-1 object-cover rounded-lg w-full`
const momentTitle = `text-[18px] text-center`

export default function YearMoments({year}: Props){
   const [selectedGame, setSelectedGame] = useState<Game | null>(null)

   useEffect(()=>{
      
   }, [])

   return (
      <div className={container}>
         <div className={infos}>
            <div className={yearInfo}>
               <h2 className={yearTitle}>{year.year}</h2>
               <h3 className={country}>{year.country}</h3>
            </div>

            <div className={roundsInfo}>
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