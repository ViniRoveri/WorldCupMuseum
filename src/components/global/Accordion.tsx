'use client'
import { ReactNode, useState } from "react"

type Props = {
   title: string
   children: ReactNode
}

const title = `border cursor-pointer flex font-bold !font-title items-center justify-between p-2 rounded-t-xl text-[19px]
sm:text-[24px]`
const content = `border p-2`

export default function Accordion(props: Props){
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div>
         <h2 className={title} onClick={() => setIsOpen(!isOpen)} style={{borderBottomLeftRadius: isOpen ? '0' : '0.75rem', borderBottomRightRadius: isOpen ? '0' : '0.75rem'}}>
            <span className="w-[23px]"/>
            
            {props.title}

            {isOpen ?
               <i className="ri-arrow-up-s-line text-[22px]"/>
            :
               <i className="ri-arrow-down-s-line text-[22px]"/>
            }
         </h2>

         {isOpen ?
            <div className={content}>
               {props.children}
            </div>
         : <></>}
      </div>
   )
}