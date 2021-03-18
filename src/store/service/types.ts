import { ActionType } from 'typesafe-actions';
import * as actions from './actions'

export type ServiceActions = ActionType<typeof actions>;

export interface IServiceState {
  loading: boolean
  error: string
  protocol: number
  serviceData: any[]
  serviceOrderData: any
}

export interface IServiceOrderState {
  serviceId: number
  cidade: string
  nomeSolicitante: string
  emailSolicitante: string
  telefoneSolicitante: string
  cpfSolicitante: string
  logradouro: string
  estado: string
  cep: string
}

export enum Constants {
  SET_SERVICE = 'SET_SERVICE',
  SET_SERVICE_ORDER = 'SET_SERVICE_ORDER',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_PROTOCOL = 'SET_PROTOCOL',
  SET_STATUSES = 'SET_STATUSES'
}