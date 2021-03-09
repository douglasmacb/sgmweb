import { Dispatch } from 'redux';
import * as actions from './actions';
import { UserActions } from './types';

function sleep(timeout: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}

export const loginAsync = async (dispatch: Dispatch<UserActions>, email: string, password: string) => {
    dispatch(actions.setLoading(true));
    await sleep(1000);
    dispatch(actions.authenticate(email, password));
    dispatch(actions.setLoading(false));
}