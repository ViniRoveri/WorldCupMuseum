import MomentCanvas from "@/components/moments/MomentCanvas"
import { allMoments } from "@/domain/models/momentsYears"
import { redirect } from "next/navigation"

type Props = {
   params: Promise<{
      momentId: string
   }>
}

export default async function page(props: Props){
   const params = await props.params
   const moment = allMoments.find(moment => moment.id == params.momentId)
   if(!moment) redirect('/')
      
   return (
      <MomentCanvas component={<moment.component/>}/> 
   )
}