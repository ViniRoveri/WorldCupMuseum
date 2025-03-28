import Moment from "@/domain/types/Moment"

type Props = {
   moment: Moment
   redirectToMoment: Function
}

const container = `cursor-pointer w-full
hover:scale-104`
const momentImage = `border-2 h-[200px] mb-1 object-cover rounded-lg w-full`
const momentTitle = `text-[18px] text-center`

export default function MomentCard({moment, redirectToMoment}: Props){
   return (
      <button className={container} onClick={() => redirectToMoment(`/${moment.id}`)} style={{
         transition: 'scale 0.3s ease-in-out'
      }} type="button">
         <img className={momentImage} src={`/img/${moment.id}.png`}/>

         <p className={momentTitle}>
            <b>{moment.minutes}</b> - {moment.title}
         </p>
      </button>
   )
}