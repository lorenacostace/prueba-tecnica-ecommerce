import React from "react";
import { Col, Container, Row } from '../../atoms/Grid';
import Breadcrumb from "../../atoms/breadcrumb/Breadcrumb";
import {ColTittle, HeaderContainer} from "./HeaderStyle";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderContainer fluid={true}>
                    <Row alignItems="center" justifyContent="between">
                        <ColTittle col={2}>
                            <h1> MyMovil </h1>
                        </ColTittle>
                        <Col col={1}>
                            { this.props.cart}
                        </Col>
                    </Row>
                </HeaderContainer>
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb {...this.props}/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Header;
