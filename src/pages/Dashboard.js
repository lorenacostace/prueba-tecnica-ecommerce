import React from "react";
import PageTemplate from '../components/templates/PageTeamplate';
import Header from "../components/molecules/Header";
import ListView from "../components/organisms/ListView";
import { Container } from "../components/atoms/Grid";

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
        this.setState({
            listProduct: this.props.products,
            filteredProducts: this.props.products
        })
    }

    render() {
        return(
            <PageTemplate
                header={<Header/>}
            >
                <Container>
                    <ListView listProduct={this.state.filteredProducts}
                              updateFilter={(filter) => this.updateFilter(filter)}/>
                </Container>
            </PageTemplate>
        )
    }
}

export default Dashboard;
