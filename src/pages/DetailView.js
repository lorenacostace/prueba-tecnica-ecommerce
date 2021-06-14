import React from 'react';
import { Col, Container, Row } from "../components/atoms/Grid"
import ImageProduct from "../components/atoms/ImageProduct";
import Actions from "../components/molecules/Actions";
import DescriptionProduct from "../components/atoms/DescriptionProduct";
import PageTemplate from "../components/templates/PageTeamplate";
import Header from "../components/molecules/Header";
import { Link } from "react-router-dom";
import backButton from "../../images/back.png"
import { objectToPascalKeys } from "../helpers/utils";

class DetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectors: [],
            descriptions: {},
            imgUrl: "",
            enableAddButton: false
        }
        this.optionsSelected = {};
        this.id = this.props.match.params.id;
    }

    setProduct(product) {
        const { imgUrl, id, options, ...features } = product;
        const descriptions = this.parsedDescriptions(features);
        const selectors = this.parsedSelectors(options)
        selectors.forEach(item => {
            if (item.keyValue.length === 1) {
                this.optionsSelected[item.id] = item.keyValue[0].code;
            }
        });

        this.setState({
            imgUrl,
            descriptions,
            selectors
        })
    }

    parsedSelectors(selectors) {
        return Object.keys(selectors).map(selectorName => {
            return {
                id: selectorName,
                keyValue: selectors[selectorName],
                selected: selectors[selectorName].length === 1 ? selectors[selectorName][0].code : ''
            }
        })
    }

    parsedDescriptions(features){
        return Object.keys(features).reduce((accumulator,featureName) => {
            const feature = features[featureName];
            const { key, value } = objectToPascalKeys(featureName, feature);
            accumulator[key] = value;
            return accumulator
        }, {})
    }

    async componentDidMount() {
        this.setProduct(this.props.product);
    }

    render() {
        return (
            <PageTemplate
                header={<Header {...this.props}/>}
            >
                <Container>
                    <Row>
                        <Col col={2} md="1" lg="1" xl="1">
                            <Link to={"/"}>
                                <img src={backButton} alt="back"/>
                            </Link>
                        </Col>
                    </Row>
                    <Row justifyContent="center">
                        <Col col={12} md="4" mdOffset="2">
                            {/* TODO preparar carrusel para cuando se reciba más de una imagen*/}
                            <ImageProduct image={ this.state.imgUrl }/>
                        </Col>
                        <Col col={12} md="6" lg="6" xl="6">
                            <DescriptionProduct description={ this.state.descriptions }/>
                            <Actions selectors={this.state.selectors} enableAddButton={this.state.enableAddButton}/>
                        </Col>
                    </Row>
                </Container>
            </PageTemplate>
        )
    }
}

export default DetailView
