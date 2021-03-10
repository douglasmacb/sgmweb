import { action } from 'typesafe-actions'
import { Constants } from './types';

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}

export function setToken(token: string) {
    return action(Constants.SET_TOKEN, {
        token
    });
}