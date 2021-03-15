import { Constants, IServiceState, ServiceActions } from './types';

const init: IServiceState = {
    error: '',
    loading: false,
    serviceData: []
};

export function serviceReducer(state: IServiceState = init, action: ServiceActions): IServiceState {
    switch (action.type) {
        case Constants.SET_SERVICE:
        case Constants.SET_LOADING: 
        case Constants.SET_ERROR: 
            return { ...state, ...action.payload }
        default:
            return state;
    }
}