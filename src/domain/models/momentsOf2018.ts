import TheYoungestSincePele from "@/components/moments/2018/FranceCroatia/TheYoungestSincePele";
import Year from "../types/Year";

const momentsOf2018: Year = {
   year: 2018,
   country: 'Russia',
   rounds: [
      {
         title: 'Final',
         games: [
            {
               title: 'France 4 x 2 Croatia',
               moments: [
                  {
                     id: 'TheYoungestSincePele',
                     title: 'The Youngest Since Pelé',
                     minutes: "64'",
                     component: TheYoungestSincePele,
                     text: `In a controlled Final for France against Croatia, the game is already 3x1 on the second half. In another attack from France, Lucas Hernández passes to Mbappé who receives with a lot of space in front of Croatia's box, he strikes from far and scores a goal that makes him the second youngest player to score in a World Cup Final since Pelé, the greatest player of all time.`
                  }
               ]
            }
         ]
      }
   ]
}

export default momentsOf2018