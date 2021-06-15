import React from "react";
import { Row, Col } from 'styled-bootstrap-grid';
import { Brand, Model, Price } from "./DescriptionItemStyle";

function DescriptionItem (props) {
    return (
        <Row>
            <Col col={12} alignSelf="center">
                <Brand>
                    { props.description.brand }
                </Brand>
                <Model>
                    { props.description.model }
                </Model>
                <Price>
                    { props.description.price }€
                </Price>
            </Col>
        </Row>
    )
}

export default DescriptionItem;
