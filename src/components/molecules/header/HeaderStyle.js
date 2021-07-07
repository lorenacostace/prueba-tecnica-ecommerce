import styled from "styled-components";
import { Container as ContainerGrid, Col as ColGrid } from '../../atoms/Grid'

export const HeaderContainer = styled(ContainerGrid)`
  background-color: #15161D;
  color: white;
  border-bottom: 3px solid #D10024;
`
export const ColTittle = styled(ColGrid)`
  @media (max-width: 576px) {
    padding-left: 1em;
  }
    padding-left: 5em;
`

export const ColCart = styled(ColGrid)`
  @media (max-width: 576px) {
    max-width: 100%;
  }
`

export const CartStyle = styled.div`
  font-size: 20px;
  background-color: #D10024;
  display: inline-block;
  min-width: 1.5em;
  min-height: 1.5em;
  padding: 5px;
  border-radius: 50%;
  text-align: center;
`
