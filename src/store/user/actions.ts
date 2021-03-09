import { action } from 'typesafe-actions'
import { Constants } from './types';

export function authenticate(email: string, password: string) {
    return action(Constants.AUTH_USER, {
        email, password
    });
}

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}

