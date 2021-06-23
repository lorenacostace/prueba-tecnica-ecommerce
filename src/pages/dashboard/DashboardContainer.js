import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { actions as actionsProducts } from '../../redux/products'
import { actions as actionsDashboard } from '../../redux/dashboard'
import {actions as actionsCart} from "../../redux/cart";

const mapStateToProps = (state) => {
    return {
        products: state.products,
        filteredProducts: state.dashboard.filteredProducts,
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatedProducts: (products) => dispatch(actionsProducts.setProducts(products)),
        filterProducts: (products) => dispatch(actionsDashboard.filteredProducts(products)),
        updateCart: (cart) => dispatch(actionsCart.setCart(cart)),
    }
}

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)

export default DashboardContainer
