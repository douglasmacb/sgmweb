import { AxiosResponse } from 'axios';
import { ApiService } from './../../services/api-service';
import { Dispatch } from 'redux';
import * as actions from './actions';
import { UserActions } from './types';

export const loginAsync = async (dispatch: Dispatch<UserActions>, email: string, password: string): Promise<boolean> => {

    dispatch(actions.setLoading(true));

    try {
        const apiService = new ApiService()
        const response: AxiosResponse<any> = await apiService.request().post('/core/auth', { email, senha: password })
        const { token } = response.data
        dispatch(actions.setToken(token))
        dispatch(actions.setLoading(false))
        dispatch(actions.setLoggedIn(true))
        dispatch(actions.setError(''))
    } catch(error) {
        dispatch(actions.setLoggedIn(false))
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(error.response?.data?.error));
        return Promise.resolve(false)
    }
    return Promise.resolve(true)
}