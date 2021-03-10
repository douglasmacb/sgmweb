import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './user/reducer'
import { IUserState } from './user/types'

export interface IRootState {
    user: IUserState
}

const reducers = combineReducers({ user: userReducer })
const store = createStore<IRootState, any, any, any>(reducers, composeWithDevTools());
export default store;