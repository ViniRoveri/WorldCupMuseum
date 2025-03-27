'use client'
import MomentsList from "@/components/home/MomentsList";
import YearInTimeline from "@/components/home/YearInTimeline";
import momentsYears from "@/domain/models/momentsYears";
import Game from "@/domain/types/Game";
import { useState } from "react";

const container = `flex flex-wrap justify-between max-w-[1000px] mx-auto p-4 relative w-full`
const timeline = `flex flex-col gap-64 pb-[50vh] pt-[30vh] w-full
md:max-w-2/5`

export default function page(){
   const [selectedGame, setSelectedGame] = useState<Game | null>(null)
   const [selectedYear, setSelectedYear] = useState<number | null>(null)

   return (
      <section className={container}>
         <div className={timeline}>
            {momentsYears.map(year => 
               <YearInTimeline key={year.year} selectedGame={selectedGame} selectedYear={selectedYear} setSelectedGame={setSelectedGame} setSelectedYear={setSelectedYear} year={year}/>
            )}
         </div>

         <MomentsList selectedGame={selectedGame} selectedYear={selectedYear}/>
      </section>
   )
}