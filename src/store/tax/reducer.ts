import { Constants, ITaxState, TaxActions } from './types';

const init: ITaxState = {
    error: '',
    loading: false,
    taxData: []
};

export function taxReducer(state: ITaxState = init, action: TaxActions): ITaxState {
    switch (action.type) {
        case Constants.SET_TAX:
        case Constants.SET_LOADING: 
        case Constants.SET_ERROR: 
            return { ...state, ...action.payload }
        default:
            return state;
    }
}