'use client'
import { allMoments } from "@/domain/models/momentsYears"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"

const header = `bg-vr-white fixed h-[64px] left-0 shadow-md top-0 w-full z-10`
const content = `flex h-full items-center justify-between max-w-[1111px] mx-auto px-4 w-full`
const h1 = `!font-title text-[22px] text-center`
const subtitle = `text-[11px] text-end`

export default function Header(){
   const pathname = usePathname()

   function pickRandomMoment(){
      const index = Math.floor(
         Math.random() * allMoments.length
      )

      const link = `/${allMoments[index].id}`

      if(pathname != link) return link
      else return pickRandomMoment()
   }

   return (
      <header className={header}>
         <div className={content}>
            <Link className="cursor-pointer" href='/'>
               <i className="ri-home-4-line text-[24px]"/>
            </Link>

            <h1 className={h1}>
               The World Cup Museum
               <p className={subtitle}>by Vini Roveri</p>
            </h1>

            <i className="ri-shuffle-line cursor-pointer text-[24px]" onClick={() => redirect(pickRandomMoment())}/>
         </div>
      </header>
   )
}