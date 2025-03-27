import Moment from "@/domain/types/Moment"
import Accordion from "../global/Accordion"

type Props = {
   moment: Moment
}

const container = `bottom-[16px] fixed right-[16px] w-[333px]
sm:w-[400px]
md:bottom-[32px] md:right-[32px] 
lg:w-[600px]`

export default function MomentTextBox({moment}: Props){
   return (
      <div className={container}>
         <Accordion startOpen title={moment.title}>
            <b>{moment.minutes} -</b> {moment.text}
         </Accordion>
      </div>
   )
}