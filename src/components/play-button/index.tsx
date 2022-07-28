import { ButtonContainer } from "./PlayButton.style";

import Constants from "../../constants/Constanta.json";
import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
}

const PlayButton: FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer onClick={() => onClick()}>
      {Constants.labels.buttonLabel}
    </ButtonContainer>
  );
};

export default PlayButton;
