import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { actions as actionsProducts } from '../../redux/products'
import { actions as actionsDashboard } from '../../redux/dashboard'

const mapStateToProps = (state) => {
    return {
        products: state.products,
        filteredProducts: state.dashboard.filteredProducts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatedProducts: (products) => dispatch(actionsProducts.setProducts(products)),
        filterProducts: (products) => dispatch(actionsDashboard.filteredProducts(products))
    }
}

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)

export default DashboardContainer
