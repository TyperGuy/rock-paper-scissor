import Consts from '../constants/Constanta.json';


export const  getResult = (player:string, machine:string)  => {

      if (player === Consts.Options.ROCK) {
        switch (machine) {
          case Consts.Options.PAPER:
            return Consts.Possibities.LOOSE;
          case Consts.Options.SCISSORS:
            return Consts.Possibities.WIN;
          default : return Consts.Possibities.TIED;
        }
      } else if (player === Consts.Options.PAPER) {
        switch (machine) {
          case Consts.Options.ROCK:
            return Consts.Possibities.WIN;
          case Consts.Options.SCISSORS:
            return Consts.Possibities.LOOSE;
          default:
            return Consts.Possibities.TIED;  
        }
      } else {
        switch (machine) {
          case Consts.Options.ROCK:
            return Consts.Possibities.LOOSE;
          case Consts.Options.PAPER:
            return Consts.Possibities.WIN;
          default: return Consts.Possibities.TIED;
        }
      }
    
}
