import { FC } from "react";
import { ButtonContainer } from "./Button.style";

const Options = {
  rock: {
    color: "#27AE60",
    icon: "icon-rock.svg",
  },
  paper: {
    color: "#F1C40F",
    icon: "icon-paper.svg",
  },
  scissors: {
    color: "#2980B9",
    icon: "icon-scissors.svg",
  },
  manchine: {
    color: "#E74C3C",
    icon: null,
  },
  none: {
    color: "",
    icon: null,
  },
};

export type OptionType = keyof typeof Options;

interface Props {
  option: OptionType;
  onClick: () => void;
}

const Button: FC<Props> = ({ option, onClick }) => {
  return (
    <ButtonContainer onClick={() => onClick()} color={Options[option].color}>
      {Options[option].icon && (
        <img src={`/public/assets/${Options[option].icon}`} alt="Hands" />
      )}
    </ButtonContainer>
  );
};

export default Button;
