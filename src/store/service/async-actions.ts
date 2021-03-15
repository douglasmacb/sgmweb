import { Dispatch } from 'redux';
import { ApiService } from './../../services/api-service';
import * as actions from './actions';
import { ServiceActions, IServiceOrderState } from './types';

export const fetchServices = async (dispatch: Dispatch<ServiceActions>): Promise<void> => {

    dispatch(actions.setLoading(true));

    try {
        const { data } = await new ApiService().get(`/servico`)
        dispatch(actions.setService(data))
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(''))
    } catch(error) {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(error.response?.data?.error))
    }
}

export const createServiceOrder = async (dispatch: Dispatch<ServiceActions>, serviceOrder: IServiceOrderState): Promise<boolean> => {

    dispatch(actions.setLoading(true));

    try {
        const { data } = await new ApiService().post(`/servico/solicitacao`, serviceOrder)
        dispatch(actions.setProtocol(data.protocolo))
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(''))
        return Promise.resolve(true)
    } catch(error) {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(error.response?.data?.error))
        return Promise.resolve(false)
    }
}

export const searchServiceOrderByProtocol = async (dispatch: Dispatch<ServiceActions>, protocol: number): Promise<void> => {

    dispatch(actions.setLoading(true));

    try {
        const { data } = await new ApiService().get(`/servico/protocolo/${protocol}`)
        dispatch(actions.setServiceOrder(data))
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(''))
    } catch(error) {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(error.response?.data?.error))
    }
}

