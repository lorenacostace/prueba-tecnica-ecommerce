import React from 'react';
import PageTemplate from '../../components/templates/PageTeamplate';
import Header from "../../components/molecules/header/Header";
import ListView from "../../components/organisms/ListView";
import { Container } from "../../components/atoms/Grid";
import { productRepository } from "../../repository";
import { updateFilter } from "../../helpers/service";

class Dashboard extends React.Component {
    updateFilter (value) {
        if(value) {
            const list = updateFilter(this.props.products, value);
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
