import { Constants, IUserState, UserActions } from './types';

const init: IUserState = {
    token: '',
    error: '',
    email: '',
    loggedIn: false,
    loading: false,
    roles: []
};

export function userReducer(state: IUserState = init, action: UserActions): IUserState {
    switch (action.type) {
        case Constants.SET_TOKEN: 
        case Constants.SET_LOADING: 
        case Constants.SET_LOGGEDIN: 
        case Constants.SET_ROLES: 
        case Constants.SET_EMAIL:
        case Constants.SET_ERROR: 
            return { ...state, ...action.payload }
        default:
            return state
    }
}