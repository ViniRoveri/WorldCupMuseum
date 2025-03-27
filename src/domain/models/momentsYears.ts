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
                        component: TheGreatestSaveOfAllTime,
                        text: `At the last minute of extra time, after a thrilling 3 x 3 draw in what is considered the best football game ever, Argentina's defender Otamendi commits a huge mistake which leads the ball to be bouncing directly in front of France's Kolo Muani, face to face with Argentina's goalkeeper Dibu Martínez. With a responsability of the size of the world on his foot, Muani strikes the most important kick of his career, but is stopped by the calf of Dibu, that not only saved the ball, but also Argentina's whole World Cup dreams by himself. This save led the game to the penalty shootouts, where Dibu could keep his star shining and made France lose 2 penalties, becoming the greatest hero of the night Argentina got its third World Cup title.`
                     },
                  ]
               }
            ]
         }
      ]
   },
   {
      year: 2018,
      country: 'Russia',
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
                        component: TheGreatestSaveOfAllTime,
                        text: ''
                     },
                  ]
               }
            ]
         }
      ]
   },
   {
      year: 2014,
      country: 'Brasil',
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
                        component: TheGreatestSaveOfAllTime,
                        text: ''
                     },
                  ]
               }
            ]
         }
      ]
   },
   {
      year: 2010,
      country: 'South Africa',
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
                        component: TheGreatestSaveOfAllTime,
                        text: ''
                     },
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