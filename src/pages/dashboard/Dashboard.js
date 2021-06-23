import React from 'react';
import PageTemplate from '../../components/templates/PageTeamplate';
import Header from "../../components/molecules/header/Header";
import ListView from "../../components/organisms/ListView";
import { Container } from "../../components/atoms/Grid";
import { productRepository } from "../../repository";

class Dashboard extends React.Component {
    updateFilter (value) {
        if(value) {
            const list = this.props.products.filter((item) => {
                const regex = new RegExp(value, 'i')
                return (item.brand.match(regex) || item.model.match(regex));
            });
            this.props.filterProducts(list)
        } else {
            this.props.filterProducts(this.props.products)
        }
    }

    async componentDidMount() {
        const products = await productRepository.getProducts();
        this.props.updatedProducts(products);
        this.props.filterProducts(products);
    }

    render() {
        return(
            <PageTemplate
                header={<Header {...this.props}/>}
            >
                <Container>
                    <ListView listProduct={this.props.filteredProducts}
                              updateFilter={(filter) => this.updateFilter(filter)}/>
                </Container>
            </PageTemplate>
        )
    }
}

export default Dashboard;
