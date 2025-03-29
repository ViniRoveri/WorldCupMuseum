'use client'
import { ReactNode, useState } from "react"

type Props = {
   title: string
   children: ReactNode
   startOpen?: boolean
}

const title = `bg-vr-lightYellow border cursor-pointer flex font-bold !font-title items-center justify-between px-4 py-2 rounded-t-xl text-[20px]
sm:text-[24px]`
const content = `bg-vr-lightYellow overflow-y-scroll`

export default function Accordion(props: Props){
   const [isOpen, setIsOpen] = useState(Boolean(props.startOpen))

   return (
      <div className="w-full">
         <h2 className={title} onClick={() => setIsOpen(!isOpen)} style={{borderBottomLeftRadius: isOpen ? '0' : '0.75rem', borderBottomRightRadius: isOpen ? '0' : '0.75rem',
            transition: 'border-bottom-left-radius 0.3s ease-in-out, border-bottom-right-radius 0.3s ease-in-out'
         }}>
            {props.title}

            {isOpen ?
               <i className="ri-arrow-up-s-line text-[22px]"/>
            :
               <i className="ri-arrow-down-s-line text-[22px]"/>
            }
         </h2>

         <div className={content} style={{
            border: isOpen ? '1px solid' : 'none', 
            height: isOpen ? '200px' : '0', 
            padding: isOpen ? '0.5rem' : '0',
            transition: 'all 0.3s ease-in-out'
         }}>
            {props.children}
         </div>
      </div>
   )
}