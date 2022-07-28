import Consts from '../constants/Constanta.json';



const options = [
  Consts.Options.PAPER,
  Consts.Options.ROCK,
  Consts.Options.SCISSORS
]

function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomicOptionGenerator():string{

  return options[getRandomInt(0,3)]
    
}

