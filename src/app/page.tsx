'use client'
import MomentsListDesktop from "@/components/home/MomentsListDesktop";
import MomentsListMobile from "@/components/home/MomentsListMobile";
import YearInTimeline from "@/components/home/YearInTimeline";
import momentsYears from "@/domain/models/momentsYears";
import Game from "@/domain/types/Game";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const timelineContainer = `max-w-[1000px] mx-auto p-4 w-full`
const timeline = `flex flex-col gap-64 pb-[50vh] pt-[30vh] w-full
md:max-w-2/5`

export default function page(){
   const router = useRouter()

   const [selectedGame, setSelectedGame] = useState<Game | null>(null)
   const [selectedYear, setSelectedYear] = useState<number | null>(null)

   const refContainer = useRef<HTMLElement>(null)
   const refTimeline = useRef<HTMLDivElement>(null)

   function redirectToMoment(link: string){
      const transitionDuration = 0.3

      let tl = gsap.timeline({defaults: {
         duration: transitionDuration,
         ease: 'power1.inOut'
      }})

      tl.to(refTimeline.current, {
         opacity: 0,
         y: -50
      })
      
      tl.to(refContainer.current, {
         opacity: 0
      })

      setTimeout(() => {
         router.push(link)
      }, transitionDuration * 3 * 1000)
   }

   return (
      <section className={timelineContainer} ref={refContainer}>
         <div className={timeline} ref={refTimeline}>
            {momentsYears.map(year => 
               <YearInTimeline key={year.year} selectedGame={selectedGame} selectedYear={selectedYear} setSelectedGame={setSelectedGame} setSelectedYear={setSelectedYear} year={year}/>
            )}
         </div>

         <MomentsListDesktop redirectToMoment={redirectToMoment} selectedGame={selectedGame} selectedYear={selectedYear}/>
         <MomentsListMobile redirectToMoment={redirectToMoment} selectedGame={selectedGame} selectedYear={selectedYear} setSelectedGame={setSelectedGame}/>
      </section>
   )
}