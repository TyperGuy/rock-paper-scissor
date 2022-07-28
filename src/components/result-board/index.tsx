import { FC, useEffect, useState } from "react";
import PlayButton from "../play-button";
import { getResult } from "../../utils/Rules";
import { postResult } from "../../utils/Controller";

import {
  Flex,
  OpctionContainer,
  Message,
  ResultContainer,
} from "./Enviroment.style";

import Option, { OptionType } from "../option/index";
import Consts from "../../constants/Constanta.json";
import { randomicOptionGenerator } from "../../utils/Game";

interface Props {
  preferedOption: OptionType;
  setControl: (value: boolean) => void;
  setScore: (value: number) => void;
  score: number;
}

const ResultBoard: FC<Props> = ({
  preferedOption,
  setControl,
  score,
  setScore,
}) => {
  const [message, setMessage] = useState(Consts.messages.CHOOSING);
  const [machineOption, setMachineOption] = useState<OptionType>("none");

  useEffect(() => {
    setMachineOption(randomicOptionGenerator() as OptionType);
    setMessage("Machine choose" + "  " + machineOption);
    udpdateScores();
  }, [machineOption]);

  const result = getResult(preferedOption, machineOption);
  console.log(result);
  const resultMessage = postResult(getResult(preferedOption, machineOption));

  const udpdateScores = () => {
    if (result === "player") setScore(score + 1);
  };

  return (
    <ResultContainer>
      <Flex>
        <Option option={preferedOption} onClick={() => {}} />
        <Option option={machineOption} onClick={() => {}} />
      </Flex>
      <Message>{message}</Message>
      {machineOption && (
        <OpctionContainer>
          <Message>{resultMessage}</Message>
          <PlayButton onClick={() => setControl(true)} />
        </OpctionContainer>
      )}
    </ResultContainer>
  );
};

export default ResultBoard;
