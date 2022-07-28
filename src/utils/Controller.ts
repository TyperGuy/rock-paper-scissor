import { OptionType } from 'components/option';
import Consts from '../constants/Constanta.json';




export const  postResult = (result:string) => {
 
  switch (result) {
    case Consts.Possibities.WIN:
      return Consts.messages.PLAYER_WIN;
    case Consts.Possibities.LOOSE:
      return Consts.messages.PLAYER_LOOSE;
    case Consts.Possibities.TIED:
        return Consts.messages.IT_WAS_ATIE;  
  }
    
}

export const  postOption = (option:string) => {
 
  switch (option) {
    case Consts.Options.PAPER:
      return "Machine Choose " + Consts.Options.PAPER;
    case Consts.Options.ROCK:
      return "Machine Choose " + Consts.Options.ROCK;
    case Consts.Options.SCISSORS:
      return "Machine Choose " + Consts.Options.SCISSORS
    default: return Consts.messages.CHOOSING;
  }
    
}




