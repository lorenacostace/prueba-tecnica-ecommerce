import React from "react";
import { Row, Col } from 'styled-bootstrap-grid';

function DescriptionItem (props) {
    return (
        <Row>
            <Col col={12} alignSelf="center">
                <div>
                    { props.description.brand }
                </div>
                <div>
                    { props.description.model }
                </div>
                <div>
                    { props.description.price }€
                </div>
            </Col>
        </Row>
    )
}

export default DescriptionItem;
