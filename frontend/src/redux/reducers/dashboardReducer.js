import * as TYPES from '../actions/actionTypes';

const DEFAULT_STATE = {
    diamonds: [],
    diamondsFromCart: [],
    cartChanged: false,
    cartId: null
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE': {
            return DEFAULT_STATE;
        }
        case TYPES.FETCH_DIAMONDS_SUCCESS: {
            return {
                ...state,
                diamonds: action.payload
            };
        }
        case TYPES.ADD_DIAMOND: {
            const diamondsSum = state.diamondsFromCart.concat(action.payload);
            const newDiamondsArray = diamondsSum.reduce((sum, obj) => {
                const found = sum.find(diamond => diamond.type === obj.type);
                if (found) {
                    found.quantity += obj.quantity;
                } else {
                    sum.push(obj);
                }
                return sum;
            }, []);
            return {
                ...state,
                diamondsFromCart: newDiamondsArray,
                cartChanged: true
            };
        }
        case TYPES.REMOVE_DIAMOND: {
            const found = state.diamondsFromCart.find(diamond => diamond.type === action.payload.type);

            let newDiamondsArray = [];
            if (found.quantity > 1){
                newDiamondsArray = state.diamondsFromCart.map(obj => obj.type === action.payload.type ?
                    {...obj, quantity: obj.quantity - 1} : obj)
            } else {
                newDiamondsArray = state.diamondsFromCart.filter(obj => obj.type !== action.payload.type)
            }
            return {
                ...state,
                diamondsFromCart: newDiamondsArray,
                cartChanged: true
            };
        }
        case TYPES.FETCH_CART_SUCCESS: {
            return {
                ...state,
                diamondsFromCart: action.payload.data.length ? action.payload.data : [],
                cartId: action.payload.id
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
