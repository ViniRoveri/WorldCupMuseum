import momentsYears from "@/domain/models/momentsYears";
import YearMoments from "./YearMoments";

export default function MomentsList(){
   return (
      <section>
         {momentsYears.map(year => 
            <YearMoments key={year.year} year={year}/>
         )}
      </section>
   )
}