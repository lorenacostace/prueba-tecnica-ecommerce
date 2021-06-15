import React from "react";
import { Col, Container, Row } from '../../atoms/Grid';
import * as eventBus from "../../../helpers/eventBus";
import * as storage from "../../../helpers/storage";
import Breadcrumb from "../../atoms/breadcrumb/Breadcrumb";
import {ColTittle, HeaderContainer} from "./HeaderStyle";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.updateCount = this.updateCount.bind(this)
    }

    componentDidMount() {
        eventBus._addEventListener('update-cart', this.updateCount);
        const count = storage.get('numCart');
        this.setState({
            count: count || 0
        });
    }

    updateCount(event) {
        storage.set('numCart', event.detail);
        this.setState({
            count: event.detail
        });
    }

    componentWillUnmount() {
        eventBus._removeEventListener('update-cart', this.updateCount)
    }

    render() {
        return (
            <React.Fragment>
                <HeaderContainer fluid={true}>
                    <Row alignItems="center" justifyContent="between">
                        <ColTittle col={2}>
                            <h1> MyMovil </h1>
                        </ColTittle>
                        <Col col={1}>
                            {this.state.count}
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
