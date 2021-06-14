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
        }
    }

    async componentDidMount() {
        this.setState({
            listProduct: this.props.products,
        })
    }

    render() {
        return(
            <PageTemplate
                header={<Header/>}
            >
                <Container>
                    <ListView listProduct={this.state.listProduct}/>
                </Container>
            </PageTemplate>
        )
    }
}

export default Dashboard;
