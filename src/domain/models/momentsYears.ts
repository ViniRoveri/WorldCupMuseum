import TheGreatestSaveOfAllTime from "@/components/moments/2022/ArgentinaFrance/TheGreatestSaveOfAllTime";
import Year from "../types/Year";
import Moment from "../types/Moment";

const momentsYears: Year[] = [
   {
      year: 2022,
      country: 'Qatar',
      rounds: [
         {
            title: 'Final',
            games: [
               {
                  title: 'Argentina 3 (4) x (2) 3 France',
                  moments: [
                     {
                        id: 'TheGreatestSaveOfAllTime',
                        title: 'The Greatest Save of All Time',
                        minutes: "122'",
                        component: TheGreatestSaveOfAllTime
                     }
                  ]
               }
            ]
         }
      ]
   }
]

function getAllMoments(){
   let moments: Moment[] = []

   for(let year of momentsYears){
      for(let round of year.rounds){
         for(let game of round.games){
            for(let moment of game.moments){
               moments.push(moment)
            }
         }
      }
   }

   return moments
}
export const allMoments = getAllMoments()

export default momentsYears