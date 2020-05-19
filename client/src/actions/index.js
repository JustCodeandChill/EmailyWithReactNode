import axios from 'axios';
import {FETCH_USER} from './type';

//action is a js object with type and payload
export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');
    dispatch({type : FETCH_USER, payload : response.data});
}
