import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #cbcf18;
  width: 320px;
  height: 40px;
  border-radius: 10px;
  border: none;
  color: #1e1e1e;
  font-size: 20px;
  font-family: "Saira Stencil One";
  cursor: pointer;

  :disabled {
    background-color: #81831b;
    cursor: default;
  }

  @media (min-width: 987px) {
    height: 57px;
  }
`;

export default ButtonStyled;
