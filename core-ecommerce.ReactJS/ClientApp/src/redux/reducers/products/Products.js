const initialState = {}

const Products  = (state = initialState, action) => {
    switch (action.Type) {
        case "ADD_PRODUCT":
            return {...state}
        default:
            return {...state}
    }
}

export default Products