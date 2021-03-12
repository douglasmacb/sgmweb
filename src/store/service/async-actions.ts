import { Dispatch } from 'redux';
import { ApiService } from './../../services/api-service';
import * as actions from './actions';
import { ServiceActions } from './types';

export const fetchServices = async (dispatch: Dispatch<ServiceActions>): Promise<void> => {

    dispatch(actions.setLoading(true));

    try {
        const { data } = await new ApiService().get(`/service`)
        dispatch(actions.setService(data))
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(''))
    } catch(error) {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(error.response?.data?.error))
    }
}
