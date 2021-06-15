import React from "react";
import PageTemplate from '../components/templates/PageTeamplate';
import Header from "../components/molecules/header/Header";
import ListView from "../components/organisms/ListView";
import { Container } from "../components/atoms/Grid";
import { productRepository } from "../repository";

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listProduct: [],
            filteredProducts: [],
        }
    }

    updateFilter (value) {
        if(value) {
            const list = this.state.listProduct.filter((item) => {
                const regex = new RegExp(value, 'i')
                return (item.brand.match(regex) || item.model.match(regex));
            });
            this.setState({
                filteredProducts: list
            })
        } else {
            this.setState({
                filteredProducts: [...this.state.listProduct]
            })
        }
    }

    async componentDidMount() {
        const products = await productRepository.getProducts();
        this.setState({
            listProduct: products,
            filteredProducts: products
        })
    }

    render() {
        return(
            <PageTemplate
                header={<Header/>}
            >
                <Container>
                    <ListView listProduct={this.state.listProduct}
                              updateFilter={(filter) => this.updateFilter(filter)}/>
                </Container>
            </PageTemplate>
        )
    }
}

export default Dashboard;
