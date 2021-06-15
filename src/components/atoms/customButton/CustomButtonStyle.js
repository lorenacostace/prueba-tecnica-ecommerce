import styled, {css} from "styled-components";

export const Button = styled.button`
  background-color: #ef233c;
  border: 2px solid transparent;
  color: #FFF;
  padding: 10px 50px 10px;
  margin: 0.5rem 0;
  width: 100%;

  ${props => props.enableAddButton && css`
    background: transparent;
    color: #2B2828FF;
  `}

  ${props => props.bold && css`
    font-weight: bold;
  `}
`;
