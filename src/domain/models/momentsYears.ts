import Year from "../types/Year";
import Moment from "../types/Moment";
import momentsOf2022 from "./momentsOf2022";

const momentsYears: Year[] = [
   momentsOf2022
]

function getAllMoments(){
   let moments: Moment[] = []

   for(let year of momentsYears){
      for(let round of year.rounds){
         for(let game of round.games){
            for(let moment of game.moments){
               moment.gameTitle = game.title
               moment.gameYear = year.year
               moments.push(moment)
            }
         }
      }
   }

   return moments
}
export const allMoments = getAllMoments()

export default momentsYears