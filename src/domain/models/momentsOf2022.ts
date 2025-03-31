import BreakingTheScriptIn2Minutes from "@/components/moments/2022/ArgentinaFrance/BreakingTheScriptIn2Minutes";
import Year from "../types/Year";
import TheGreatestSaveOfAllTime from "@/components/moments/2022/ArgentinaFrance/TheGreatestSaveOfAllTime";
import WhenThePrinceAlmostBecameAKing from "@/components/moments/2022/CroatiaBrasil/WhenThePrinceAlmostBecameAKing";

const momentsOf2022: Year = {
   year: 2022,
   country: 'Qatar',
   rounds: [
      {
         title: 'Quarter-finals',
         games: [
            {
               title: 'Croatia 1 (4) x (2) 1 Brazil',
               moments: [
                  {
                     id: 'WhenThePrinceAlmostBecameAKing',
                     title: 'When The Prince Almost Became a King',
                     minutes: "105+1'",
                     component: WhenThePrinceAlmostBecameAKing,
                     text: `Following a tense and uneventful 0x0 draw in the 90 minutes, the game heads to extra time. After the first 15 minutes, Neymar starts a great passing play that ends up leading the ball right back to him face to face with Croatia's goalkeeper. At that situation Neymar dribbles the goalkeeper with a single touch and scores what is one of the most anthological goals of his whole career.`
                  }
               ]
            }
         ]
      },
      {
         title: 'Final',
         games: [
            {
               title: 'Argentina 3 (4) x (2) 3 France',
               moments: [
                  {
                     id: 'BreakingTheScriptIn2Minutes',
                     title: 'Breaking The Script in 2 Minutes',
                     minutes: "81'",
                     component: BreakingTheScriptIn2Minutes,
                     text: `After a game dominated by Argentina, the french find themselves with a bit over 10 minutes left on the clock and 2x0 down, that is until Kylian Mbappé decided to take matters into his own hands. Just when it looked like the title was already in Argentina's hands, France is awarded a penalty kick which Mbappé scores to make it 2x1, and right at the next minute France creates a play that leads to Mbappé scoring a wonder goal to equalize the game against all odds, sending it to extra time and shocking the whole football world.`
                  },
                  {
                     id: 'TheGreatestSaveOfAllTime',
                     title: 'The Greatest Save of All Time',
                     minutes: "120+2'",
                     component: TheGreatestSaveOfAllTime,
                     text: `At the last minute of extra time, after a thrilling 3x3 draw in what is considered the best football game ever, Argentina's defender Otamendi commits a huge mistake which leads the ball to be bouncing directly in front of France's Kolo Muani, face to face with Argentina's goalkeeper Dibu Martínez. With a responsability of the size of the world on his foot, Muani strikes the most important kick of his career, but is stopped by the calf of Dibu, that not only saved the ball, but also Argentina's whole World Cup dreams by himself. This save led the game to the penalty shootouts, where Dibu could keep his star shining and made France lose 2 penalties, becoming the greatest hero of the night Argentina got its third World Cup title.`
                  }
               ]
            }
         ]
      }
   ]
}

export default momentsOf2022