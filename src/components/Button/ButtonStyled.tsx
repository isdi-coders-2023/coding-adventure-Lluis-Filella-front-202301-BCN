import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: var(--main-detail-color);
  width: 325px;
  height: 40px;
  border-radius: 10px;
  border: none;
  color: var(--main-text-color);
  font-size: 20px;
  font-family: var(--secondary-font);
  cursor: pointer;

  :disabled {
    background-color: var(--shady-detail-color);
    cursor: default;
  }

  @media (min-width: 987px) {
    height: 57px;
  }
`;

export default ButtonStyled;
