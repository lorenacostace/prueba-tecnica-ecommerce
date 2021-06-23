import React from 'react';
import { Col, Container, Row } from "../../components/atoms/Grid"
import ImageProduct from "../../components/atoms/imageProduct/ImageProduct";
import Actions from "../../components/molecules/Actions";
import DescriptionProduct from "../../components/atoms/descriptionProduct/DescriptionProduct";
import PageTemplate from "../../components/templates/PageTeamplate";
import Header from "../../components/molecules/header/Header";
import { Link } from "react-router-dom";
import backButton from "../../images/back.png"
import { objectToPascalKeys } from "../../helpers/utils";
import { cartRepository, productRepository } from "../../repository";

class DetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enableAddButton: false
        }
        this.optionsSelected = {};
        this.id = this.props.match.params.id;
        this.modifiedSelector = this.modifiedSelector.bind(this);
        this.addCart = this.addCart.bind(this);
    }

    setProduct(product) {
        const { id, options, ...features } = product;
        this.props.updatedProduct(features);
        const selectors = this.parsedSelectors(options)
        selectors.forEach(item => {
            if (item.keyValue.length === 1) {
                this.optionsSelected[item.id] = item.keyValue[0].code;
            }
        });
        this.props.updatedSelectors(selectors);
        this.checkSelectors()
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

    modifiedSelector(id, code) {
        this.optionsSelected[id] = code;
        const selectors = this.props.selectors.map((item) => {
            console.log(item);
            if(item.id === id){
                return {
                    id: item.id,
                    keyValue: item.keyValue,
                    selected:code,
                }
            }
            else {
                return item;
            }
        })
        this.props.updatedSelectors(selectors);
        this.checkSelectors()
    }

    checkSelectors () {
        if(Object.keys(this.optionsSelected).length === this.props.selectors.length) {
            this.setState({
                enableAddButton: true
            })
        }
    }

    async addCart() {
        const response = await cartRepository.postCart({
            id: this.id,
            selectors: this.optionsSelected
        });
        this.props.updateCart(this.props.cart+response.count)
    } catch (e) {
        // TODO Handler error
    }

    async componentDidMount() {
        let product;
        try {
            product = await productRepository.getProductById(this.id);
        } catch (e) {
            // TODO Handler error
        }
        this.setProduct(product);

    }

    render() {
        const {imgUrl, ...productFeatures } = this.props.product;
        const { ...descriptions} = this.parsedDescriptions(productFeatures);
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
                            <ImageProduct image={ this.props.product.imgUrl }/>
                        </Col>
                        <Col col={12} md="6" lg="6" xl="6">
                            <DescriptionProduct description={ descriptions }/>
                            <Actions selectors={this.props.selectors}
                                     enableAddButton={this.state.enableAddButton}
                                     addCart={this.addCart}
                                     updateSelector={this.modifiedSelector}/>
                        </Col>
                    </Row>
                </Container>
            </PageTemplate>
        )
    }
}

export default DetailView
