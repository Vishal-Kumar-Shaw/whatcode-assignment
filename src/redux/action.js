import * as types from './actionType';
import axios from 'axios';

const getBills = (Bills) =>({
    type: types.GET_BILLS,
    payload: Bills
});

export const loadBills = () =>{
    return function(dispatch) {
        axios.get('https://json-server-whatcode-assignment.onrender.com/bills').then((resp) =>{
            console.log(resp);
            dispatch(getBills(resp.data));
        }).catch(err=>console.log(err));
    }
}