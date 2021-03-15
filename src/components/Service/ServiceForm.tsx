import { Button } from '../Button'
import { Spinner } from '../Spinner/Spinner'
import { FormikProps } from 'formik'
import './ServiceForm.css'
import { FormValues } from './Service'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store'
import { IServiceState } from '../../store/service/types'
import InputMask from 'react-input-mask'

export interface Props {
    loading?: boolean
    error?: string
}

interface IService {
    id: number
    nome: string
}

export const ServiceForm = (props: Props & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        error,
        handleChange,
        handleSubmit,
    } = props;


    const serviceStateSelector = (state: IRootState) => state.service

    const serviceState: IServiceState = useSelector(serviceStateSelector)

    return (
        <div className="service-container">
            <form onSubmit={handleSubmit}>
                <div className="service-forms">
                    <div className="service-item">
                        <div className="service-title">
                            <h3>Solicitação</h3>
                        </div>
                        <select name="servicoId" id="servicoId" value={values.servicoId} className={`input-container`} onChange={handleChange}>
                            {serviceState.serviceData.map((service: IService) => {
                                return (
                                    <option key={service.id} value={service.id}>{service.nome}</option>
                                )
                            })}
                        </select>
                        <div className="service-errors">{errors.servicoId}</div>
                        <input
                            id="logradouro"
                            name="logradouro"
                            placeholder="Logradouro"
                            type="text"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.logradouro}
                        />
                        <div className="service-errors">{errors.logradouro}</div>
                        <input
                            id="numero"
                            name="numero"
                            placeholder="Número"
                            type="number"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.numero}
                        />
                        <div className="service-errors">{errors.numero}</div>
                        <InputMask
                            id="cep"
                            name="cep"
                            placeholder="CEP"
                            mask="99999-999"
                            type="text"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.cep}
                        />
                        <div className="service-errors">{errors.cep}</div>
                        <input
                            id="cidade"
                            name="cidade"
                            placeholder="Cidade"
                            type="text"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.cidade}
                        />
                        <div className="service-errors">{errors.cidade}</div>
                        <input
                            id="estado"
                            name="estado"
                            placeholder="Estado"
                            type="text"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.estado}
                        />
                        <div className="service-errors">{errors.estado}</div>

                        <label htmlFor="descricao">Descrição da Solicitação: </label>
                        <textarea id="descricao" value={values.descricao} onChange={handleChange} className={`input-container`} />
                        <div className="service-errors">{errors.descricao}</div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">
                            <h3>Dados do Solicitante</h3>
                        </div>
                        <input
                            id="nomeSolicitante"
                            name="nomeSolicitante"
                            placeholder="Nome do Solicitante"
                            type="text"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.nomeSolicitante}
                        />
                        <div className="service-errors">{errors.nomeSolicitante}</div>
                        <input
                            id="emailSolicitante"
                            name="emailSolicitante"
                            placeholder="Email"
                            type="text"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.emailSolicitante}
                        />
                        <div className="service-errors">{errors.emailSolicitante}</div>
                        <InputMask
                            id="telefoneSolicitante"
                            name="telefoneSolicitante"
                            mask="(99) 99999-9999"
                            placeholder="Telefone"
                            type="text"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.telefoneSolicitante}
                        />
                        <div className="service-errors">{errors.telefoneSolicitante}</div>
                        <InputMask
                            id="cpfSolicitante"
                            name="cpfSolicitante"
                            mask="999.999.999-99"
                            placeholder="CPF"
                            type="text"
                            className={`input-container`}
                            onChange={handleChange}
                            value={values.cpfSolicitante}
                        />
                        <div className="service-errors">{errors.cpfSolicitante}</div>
                    </div>

                </div>
                <div className="service-actions">
                    {serviceState.loading ? <Spinner /> :
                        <Button
                            buttonStyle="btn--primary"
                            buttonSize="btn--small"
                            type="submit">
                            Solicitar
                    </Button>
                    }
                    {error && <div className="api-errors">{error}</div>}
                </div>
            </form>
        </div>
    )
}