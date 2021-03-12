import { action } from 'typesafe-actions'
import { Constants } from './types';

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}

export function setService(serviceData: object[]) {
    return action(Constants.SET_SERVICE, {
        serviceData
    });
}

export function setError(error: string) {
    return action(Constants.SET_ERROR, {
        error
    });
}

