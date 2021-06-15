import React from "react";
import { Col, Row } from '../atoms/Grid';
import ListProduct from "./ListProduct";
import Search from "../atoms/search/Search";

class ListView extends React.Component {
    render() {
        return(
            <div>
                <Row justifyContent="end">
                    <Col col md="5">
                        <Search updateFilter={(filter) => this.props.updateFilter(filter)}/>
                    </Col>
                </Row>
                <div>
                    <ListProduct listProduct={this.props.listProduct}/>
                </div>
            </div>
        )
    }
}

export default ListView;
