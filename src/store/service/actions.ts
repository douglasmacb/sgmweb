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

export function setServiceContacts(serviceContactsData: any) {
    return action(Constants.SET_SERVICE_CONTACTS, {
        serviceContactsData
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

export function setStatuses(statuses: any[]) {
    return action(Constants.SET_STATUSES, {
        statuses
    });
}

