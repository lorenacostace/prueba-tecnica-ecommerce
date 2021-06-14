import React from 'react';
import { Row, Col } from "../atoms/Grid"
import Product from "../organisms/Product";
import { Link } from "react-router-dom";

class ListProduct extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    { this.props.listProduct.map((item, index) => (
                        <Col  key={index} col={12} md={3}>
                            <Link to={"/product/" + item.id}>
                                <Product data={ item }/>
                            </Link>
                        </Col>
                    )) }
                </Row>
            </div>
        )
    }
}

export default ListProduct
