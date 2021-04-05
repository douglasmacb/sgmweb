import { action } from 'typesafe-actions'
import { Constants } from './types';

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}

export function setTax(taxData: object[]) {
    return action(Constants.SET_TAX, {
        taxData
    });
}

export function setError(error: string) {
    return action(Constants.SET_ERROR, {
        error
    });
}

