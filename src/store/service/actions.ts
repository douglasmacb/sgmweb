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

export function setServiceOrder(serviceOrderData: any) {
    return action(Constants.SET_SERVICE_ORDER, {
        serviceOrderData
    });
}

export function setError(error: string) {
    return action(Constants.SET_ERROR, {
        error
    });
}

export function setProtocol(protocol: number) {
    return action(Constants.SET_PROTOCOL, {
        protocol
    });
}

