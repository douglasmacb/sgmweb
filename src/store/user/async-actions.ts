import { ApiResponse, ApiService } from './../../services/api-service';
import { Dispatch } from 'redux';
import * as actions from './actions';
import { UserActions } from './types';

export const loginAsync = async (dispatch: Dispatch<UserActions>, email: string, password: string): Promise<boolean> => {

    dispatch(actions.setLoading(true));

    try {
        const apiService = new ApiService()
        const response: ApiResponse = await apiService.post('/core/auth', { email, senha: password })
        const { token, roles } = response.data
        localStorage.setItem('token', token)
        dispatch(actions.setToken(token))
        dispatch(actions.setRoles(roles))
        dispatch(actions.setEmail(email))
        dispatch(actions.setLoading(false))
        dispatch(actions.setLoggedIn(true))
        dispatch(actions.setError(''))
    } catch(error) {
        dispatch(actions.setLoggedIn(false))
        dispatch(actions.setLoading(false))
        dispatch(actions.setRoles([]))
        dispatch(actions.setToken(''))
        dispatch(actions.setError(error.response?.data?.error))
        return Promise.resolve(false)
    }
    return Promise.resolve(true)
}


export const logoutAsync = async (dispatch: Dispatch<UserActions>): Promise<void> => {
    new ApiService().logout()
    dispatch(actions.setToken(''))
    dispatch(actions.setRoles([]))
    dispatch(actions.setEmail(''))
    dispatch(actions.setLoading(false))
    dispatch(actions.setLoggedIn(false))
    dispatch(actions.setError(''))
}