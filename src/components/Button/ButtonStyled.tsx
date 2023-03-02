import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: var(--main-detail-color);
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
`;

export default ButtonStyled;
