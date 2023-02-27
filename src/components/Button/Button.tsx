import ButtonStyled from "./ButtonStyled";
import { ButtonProps } from "./types";

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
