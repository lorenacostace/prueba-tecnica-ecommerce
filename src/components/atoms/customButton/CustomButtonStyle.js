import styled, {css} from "styled-components";

export const Button = styled.button`
  background-color: #D10024;
  border: 2px solid transparent;
  color: #FFF;
  padding: 10px 50px 10px;
  margin: 0.5rem 0;
  width: 100%;

  ${props => props.disabled && css`
    background-color: #c1bdbe;
    color: #FFF;
  `}

  ${props => props.bold && css`
    font-weight: bold;
  `}
`;
