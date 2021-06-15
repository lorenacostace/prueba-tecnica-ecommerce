import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import Selector from "../atoms/selector/Selector";
import CustomButton from "../atoms/customButton/CustomButton";

class Actions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row justifyContent="center">
                    {
                        this.props.selectors.map(selector => {
                            return (
                                <Col key={selector.id} col={12} md={6}>
                                    <Selector name={selector.id}
                                              selected={selector.selected}
                                              options={selector.keyValue}
                                              updateSelector={this.props.updateSelector}
                                     />
                                </Col>)
                        })
                    }
                </Row>
                <CustomButton text="ADD"
                              enableAddButton={this.props.enableAddButton}
                              addCart={this.props.addCart}
                              bold/>
            </React.Fragment>
        )
    }
}

export default Actions
