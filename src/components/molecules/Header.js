import React from "react";
import {Col, Container, Row} from '../atoms/Grid';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid={true}>
                    <Row alignItems="center" justifyContent="between">
                        <Col col={2}>
                            <h1> MyMovil </h1>
                        </Col>
                        <Col col={1}>
                            0
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Header;
