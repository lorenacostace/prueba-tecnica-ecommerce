import styled from "styled-components";
import { media } from 'styled-bootstrap-grid';
import { Link } from "react-router-dom";

export const BreadCrumbs = styled.div`
  padding: 0.5rem;
  
  ${media.md`
    padding-left: 10px
  `}
`

export const BreadCrumbColor = styled(Link)`
  color: #D10024
`
