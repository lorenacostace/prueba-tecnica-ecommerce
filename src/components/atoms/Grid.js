import React from 'react';
import { Col as ColBoostrap, Row as RowBoostrap, Container as ContainerBoostrap } from 'styled-bootstrap-grid';

export function Col (props) {
    return (
        <ColBoostrap {...props}>{ props.children }</ColBoostrap>
    )
}

export function Row (props) {
    return (
        <RowBoostrap {...props}>{ props.children }</RowBoostrap>
    )
}

export function Container (props) {
    return (
        <ContainerBoostrap {...props}>{ props.children }</ContainerBoostrap>
    )
}
