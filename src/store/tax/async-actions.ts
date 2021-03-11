import { Dispatch } from 'redux';
import { ApiService } from './../../services/api-service';
import * as actions from './actions';
import { TaxActions } from './types';

export const searchIPTUByCpfAsync = async (dispatch: Dispatch<TaxActions>, cpf: string): Promise<void> => {

    dispatch(actions.setLoading(true));

    try {
        const { data } = await new ApiService().get(`/stur/iptu/cpf/${cpf}`)
        dispatch(actions.setTax(data))
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(''))
    } catch(error) {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(error.response?.data?.error))
    }
}

export const searchIPTUByCnpjAsync = async (dispatch: Dispatch<TaxActions>, cnpj: string): Promise<void> => {

    dispatch(actions.setLoading(true));

    try {
        const { data } = await new ApiService().get(`/stur/iptu/cnpj/${cnpj}`)
        dispatch(actions.setTax(data))
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(''))
    } catch(error) {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(error.response?.data?.error))
    }
}