import * as actionTypes from '../constants/serviceConstants';
import axios from 'axios';

export const getServiceDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: actionTypes.GET_SERVICE_DETAILS_REQUEST});
        const { data } = await axios.get(`/api/service/${id}`);
        dispatch ({
            type: actionTypes.GET_SERVICE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: actionTypes.GET_SERVICE_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
};