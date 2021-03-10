import { Constants, IUserState, UserActions } from './types';

const init: IUserState = {
    token: '',
    loading: false
};

export function userReducer(state: IUserState = init, action: UserActions): IUserState {
    switch (action.type) {
        case Constants.SET_TOKEN:
            return { ...state, ...action.payload }
        case Constants.SET_LOADING: 
            return { ...state, ...action.payload }
        default:
            return state;
    }
}