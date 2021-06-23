import { connect } from "react-redux";
import DetailView from "./DetailView";
import { actions as actionsProduct } from '../../redux/product'
import { actions as actionsSelectors } from '../../redux/detailView'
import { actions as actionsCart } from '../../redux/cart'

const mapStateToProps = (state) => {
    return {
        product: state.product,
        selectors: state.detailView.selectors,
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatedProduct: (product) => dispatch(actionsProduct.setProduct(product)),
        updatedSelectors: (selectors) => dispatch(actionsSelectors.setSelectors(selectors)),
        updateCart: (cart) => dispatch(actionsCart.setCart(cart)),
    }
}

const DetailViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailView)

export default DetailViewContainer
