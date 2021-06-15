import styled from "styled-components";
import { Col, Row} from '../Grid'
import { media } from 'styled-bootstrap-grid';

export const Description = styled.div`
  ${media.sm`
      padding-top: 0.5rem;
  `}
`

export const BoldStyle = styled.span`
  font-weight: bold;
`

export const NameStyle = styled(Col)`
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 25px;
  color: #2B2D42;
`

export const PriceStyle = styled(Col)`
  font-family: sans-serif;
  font-weight: 1000;
  font-size: 35px;
  color: #D10024;
  padding-top: 0.4em;
`

export const MarginLeft = styled(Row)`
  margin-left: 0;
`

export const FeaturesStyle = styled.span`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: #2B2D42;
`
