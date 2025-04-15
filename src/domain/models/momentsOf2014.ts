import GermanysUnlikelyHero from "@/components/moments/2014/GermanyArgentina/GermanysUnlikelyHero";
import Year from "../types/Year";

const momentsOf2014: Year = {
   year: 2014,
   country: 'Brasil',
   rounds: [
      {
         title: 'Final',
         games: [
            {
               title: 'Germany 1 x 0 Argentina',
               moments: [
                  {
                     id: 'GermanysUnlikelyHero',
                     title: `Germany's Unlikely Hero`,
                     minutes: "112'",
                     component: GermanysUnlikelyHero,
                     text: `By the second half of extra time, the World Cup Final is drawn in 0x0 with great chances for both sides. That's when with only 8 minutes left, André Schürrle carries the ball through Germany's left wing and crosses to Mario Götze, who had been subbed in replacing Miroslav Klose, the World Cup's all time top scorer at the time. Götze controlls the ball on his chest and finishes with a beautiful volley to send the ball past Argentina's goalkeeper, giving Germany their 4th World Cup title.`
                  }
               ]
            }
         ]
      }
   ]
}

export default momentsOf2014