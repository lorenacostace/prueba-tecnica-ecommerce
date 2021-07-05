import React from "react";
import { Col, Container, Row } from '../../atoms/Grid';
import Breadcrumb from "../../atoms/breadcrumb/Breadcrumb";
import { ColTittle, HeaderContainer } from "./HeaderStyle";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderContainer fluid={true}>
                    <Row alignItems="center" justifyContent="between">
                        <ColTittle col={2}>
                            <Link to={"/"}>
                                <h1> MyMovil </h1>
                            </Link>
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
