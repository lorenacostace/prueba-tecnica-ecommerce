import { connect } from "react-redux";
import DetailView from "./DetailView";
import { actions as actionsProduct } from '../../redux/product'
import { actions as actionsSelectors } from '../../redux/detailView'

const mapStateToProps = (state) => {
    return {
        product: state.product,
        selectors: state.detailView.selectors,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatedProduct: (product) => dispatch(actionsProduct.setProduct(product)),
        updatedSelectors: (selectors) => dispatch(actionsSelectors.setSelectors(selectors))
    }
}

const DetailViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailView)

export default DetailViewContainer
