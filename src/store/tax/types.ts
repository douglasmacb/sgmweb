import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type TaxActions = ActionType<typeof actions>;

export interface ITaxState {
  loading: boolean
  error: string
  taxData: any[]
}

export enum Constants {
  SET_TAX = 'SET_TAX',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR'
}