import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type ServiceActions = ActionType<typeof actions>;

export interface IServiceState {
  loading: boolean
  error: string
  serviceData: any[]
}

export enum Constants {
  SET_SERVICE = 'SET_SERVICE',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR'
}