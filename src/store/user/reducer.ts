import { Constants, IUserState, UserActions } from './types';

const init: IUserState = {
    email: '',
    password: '',
    loading: false
};

export function userReducer(state: IUserState = init, action: UserActions): IUserState {
    switch (action.type) {
        case Constants.AUTH_USER:
            return { ...state, email: action.payload.email, password: action.payload.password }
        case Constants.SET_LOADING: 
            return { ...state, ...action.payload}
        default:
            return state;
    }
}