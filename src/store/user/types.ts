import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type UserActions = ActionType<typeof actions>;

export interface IUserState {
  token: string
  error: string
  email: string
  loggedIn: boolean
  loading: boolean
  roles: string[]
}

export enum Constants {
  SET_TOKEN = 'SET_TOKEN',
  SET_ROLES = 'SET_ROLES',
  SET_EMAIL = 'SET_EMAIL',
  SET_LOADING = 'SET_LOADING',
  SET_LOGGEDIN = 'SET_LOGGEDIN',
  SET_ERROR = 'SET_ERROR'
}