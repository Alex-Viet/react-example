import { styled } from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.$primary ? "white" : "palevioletred")};
  background-color: ${(props) => (props.$primary ? "palevioletred" : "white")};
  font-size: 20px;
  margin: 10px;
  border: 2px solid palevioletred;
  border-radius: 20px;
  width: 250px;
  height: 50px;
`;
