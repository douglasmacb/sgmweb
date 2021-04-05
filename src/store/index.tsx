import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ITaxState } from './tax/types'
import { userReducer } from './user/reducer'
import { taxReducer } from './tax/reducer'
import { IUserState } from './user/types'
import { IServiceState } from './service/types'
import { serviceReducer } from './service/reducer'

export interface IRootState {
    user: IUserState
    tax: ITaxState
    service: IServiceState
}

const reducers = combineReducers({ 
    user: userReducer, 
    tax: taxReducer,
    service: serviceReducer
})

const store = createStore<IRootState, any, any, any>(reducers, composeWithDevTools());

export default store;