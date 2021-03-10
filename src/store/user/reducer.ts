import { Constants, IUserState, UserActions } from './types';

const init: IUserState = {
    token: '',
    error: '',
    loggedIn: false,
    loading: false,
};

export function userReducer(state: IUserState = init, action: UserActions): IUserState {
    switch (action.type) {
        case Constants.SET_TOKEN:
        case Constants.SET_LOADING: 
        case Constants.SET_LOGGEDIN: 
            return { ...state, ...action.payload }
        case Constants.SET_ERROR: 
            return { ...state, error: action.payload.error }
        default:
            return state;
    }
}