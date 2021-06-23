import { connect } from "react-redux";
import DetailView from "./DetailView";
import { actions as actionsProduct } from '../../redux/product'
import { actions as actionsDetailView } from '../../redux/detailView'
import { actions as actionsCart } from '../../redux/cart'

const mapStateToProps = (state) => {
    return {
        product: state.product,
        selectors: state.detailView.selectors,
        cart: state.cart,
        enableAddButton: state.detailView.enableAddButton
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatedProduct: (product) => dispatch(actionsProduct.setProduct(product)),
        updatedSelectors: (selectors) => dispatch(actionsDetailView.setSelectors(selectors)),
        updateCart: (cart) => dispatch(actionsCart.setCart(cart)),
        updateAddButton: (bool) => dispatch(actionsDetailView.setAddButton(bool)),
    }
}

const DetailViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailView)

export default DetailViewContainer
