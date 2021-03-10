import { action } from 'typesafe-actions'
import { Constants } from './types';

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}

export function setLoggedIn(loggedIn: boolean) {
    return action(Constants.SET_LOGGEDIN, {
        loggedIn
    });
}

export function setToken(token: string) {
    return action(Constants.SET_TOKEN, {
        token
    });
}

export function setError(error: string) {
    return action(Constants.SET_ERROR, {
        error
    });
}

