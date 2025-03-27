import momentsYears from "@/domain/models/momentsYears";
import YearMoments from "./YearMoments";

const container = `flex flex-col gap-64 pb-[50vh] pt-[20vh]`

export default function MomentsList(){
   return (
      <section className={container}>
         {momentsYears.map(year => 
            <YearMoments key={year.year} year={year}/>
         )}
      </section>
   )
}