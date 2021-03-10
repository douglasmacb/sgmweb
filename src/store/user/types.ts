import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type UserActions = ActionType<typeof actions>;

export interface IUserState {
  token: string
  loading: boolean
}

export enum Constants {
  SET_TOKEN = 'SET_TOKEN',
  SET_LOADING = 'SET_LOADING'
}