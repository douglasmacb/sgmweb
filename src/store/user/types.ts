import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type UserActions = ActionType<typeof actions>;

export interface IUserState {
  email: string
  password: string
  loading: boolean
}

export enum Constants {
  AUTH_USER = 'AUTH_USER',
  SET_LOADING = 'SET_LOADING'
}