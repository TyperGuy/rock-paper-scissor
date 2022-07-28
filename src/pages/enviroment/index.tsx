import { useEffect, useState } from "react";
import Consts from "../../constants/Constanta.json";
import {
  Label,
  Main,
  Flex,
  GameBoard,
  Score,
  ScoreContainer,
  OpctionContainer,
} from "./Enviroment.style";

import Option, { OptionType } from "../../components/option/index";
import Constants from "../../constants/Constanta.json";
import ResultBoard from "../../components/result-board";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Enviroment = () => {
  const [control, setControl] = useState(true);
  const [preferedOption, setPreferedOption] = useState<OptionType>("none");
  const [storedScore, setStoredScore] = useLocalStorage("myScore", 0);
  const [score, setScore] = useState(0);

  const handleChoose = (option: OptionType) => {
    setPreferedOption(option);
    setControl(false);
  };

  useEffect(() => {});

  return (
    <Main>
      <GameBoard>
        <ScoreContainer>
          <Label>{Constants.labels.score}</Label>
          <Score>{score}</Score>
        </ScoreContainer>
        {control ? (
          <OpctionContainer>
            <Flex>
              <Option
                option="rock"
                onClick={() => handleChoose(Consts.Options.ROCK as OptionType)}
              />
              <Option
                option="paper"
                onClick={() => handleChoose(Consts.Options.PAPER as OptionType)}
              />
            </Flex>
            <Option
              option="scissors"
              onClick={() =>
                handleChoose(Consts.Options.SCISSORS as OptionType)
              }
            />
          </OpctionContainer>
        ) : (
          <ResultBoard
            preferedOption={preferedOption}
            setControl={setControl}
            score={score}
            setScore={setScore}
          />
        )}
      </GameBoard>
    </Main>
  );
};

export default Enviroment;
