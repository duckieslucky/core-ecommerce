import * as type from '../config/index'

export const Add_product = product => {
    return {
        Type: type.ADD_PRODUCT,
        product
    }
}

export const Dispatch_Add_product = product => {
    return dispatch => {
        dispatch(Add_product(product))
    }
}