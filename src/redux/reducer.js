import * as types from './actionType';
const initialState = {
    bills:[],
    singleBill: {},
    loading: true
};

const userReducers = (state=initialState, action) => {
    switch (action.type) {
        case types.GET_BILLS:
            return {
                ...state,
                bills: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default userReducers;