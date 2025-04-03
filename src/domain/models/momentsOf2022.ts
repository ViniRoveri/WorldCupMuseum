import BreakingTheScriptIn2Minutes from "@/components/moments/2022/ArgentinaFrance/BreakingTheScriptIn2Minutes";
import Year from "../types/Year";
import TheGreatestSaveOfAllTime from "@/components/moments/2022/ArgentinaFrance/TheGreatestSaveOfAllTime";
import WhenThePrinceAlmostBecameAKing from "@/components/moments/2022/CroatiaBrasil/WhenThePrinceAlmostBecameAKing";
import TheArgentineSpiderMan from "@/components/moments/2022/ArgentinaCroatia/TheArgentineSpiderMan";
import AfricasGreatestWhatIf from "@/components/moments/2022/FranceMorocco/AfricasGreatestWhatIf";
import TheNeterlandsLastResort from "@/components/moments/2022/ArgentinaNetherlands/TheNeterlandsLastResort";
import ItsNotComingHome from "@/components/moments/2022/FranceEngland/ItsNotComingHome";

const momentsOf2022: Year = {
   year: 2022,
   country: 'Qatar',
   rounds: [
      {
         title: 'Quarter-Finals',
         games: [
            {
               title: 'Argentina 2 (4) x (3) 2 Netherlands',
               moments: [
                  {
                     id: 'TheNeterlandsLastResort',
                     title: `The Netherland's Last Resort`,
                     minutes: "90+10'",
                     component: TheNeterlandsLastResort,
                     text: `After over 100 minutes of a tense match full of drama, the dutch find themselves 2x1 down against Argentina in the last minute, and with a free kick to take right in front of the opposing box. Just when everyone expected a direct kick, the dutch execute a beautiful set piece that leads Wout Weghorst to have the chance of being face to face with Argentina's keeper. Even with all the pressure of this situation, Weghorst scores and ties the game at the last possible moment to send it to extra time.`
                  }
               ]
            },
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
            },
            {
               title: 'France 2 x 1 England',
               moments: [
                  {
                     id: 'ItsNotComingHome',
                     title: `It's Not Coming Home`,
                     minutes: "83'",
                     component: ItsNotComingHome,
                     text: `Approaching the last 10 minutes of a thrilling game, France scores with Olivier Giroud to break the tie and make it 2x1 against England. However when everything looked good for the french, only 5 minutes later a penalty kick is awarded to England, and their star Harry Kane has the chance of tying the game and send it to extra time. But when Kane goes for the ball he kicks it just above the crossbar, ending England's moral for the game and their participation in the World Cup.`
                  }
               ]
            },
            // {
            //    title: 'Morocco 1 x 0 Portugal',
            //    moments: [
            //       {
            //          id: 'BecomingAfricasGreatest',
            //          title: `Becoming Africa's Greatest`,
            //          minutes: "",
            //          component: ,
            //          text: ``
            //       }
            //    ]
            // }
         ]
      },
      {
         title: 'Semi-Finals',
         games: [
            {
               title: 'Argentina 3 x 0 Croatia',
               moments: [
                  {
                     id: 'TheArgentineSpiderMan',
                     title: 'The Argentine Spider-Man',
                     minutes: "38'",
                     component: TheArgentineSpiderMan,
                     text: `Argentina is already leading 1x0 near the end of the first half in a fairly balanced game, that is until Julián Alvarez decides to take the ball on the defending side of the field and take it with himself going through the whole croatian defence and finishing up with an acrobatic jump to kick the ball into the net and extend Argentina's lead.`
                  }
               ]
            },
            {
               title: 'France 2 x 0 Morocco',
               moments: [
                  {
                     id: 'AfricasGreatestWhatIf',
                     title: `Africa's Greatest "What If"`,
                     minutes: "43'",
                     component: AfricasGreatestWhatIf,
                     text: `Starting the game Morocco already had the achievement of being the first african team in history to reach the semi-finals of the World Cup, and looking forward to making even more history by reaching the grand finals. Nearing the end of the first half they are 1x0 down against France, but after a corner kick the ball goes flying in the box and Morocco's defender Jawad El Yamiq pulls out a bicycle kick that surprise everyone and that forces France's goalkeeper Lloris to make an extraordinary save to keep France ahead and take out Morocco's best chance to tie the game so far.`
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