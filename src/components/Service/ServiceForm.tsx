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
        loading,
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
                        <select name="servicoId" value={values.servicoId} onChange={handleChange}  id="servicoId">
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
                            onChange={handleChange}
                            value={values.logradouro}
                        />
                        <div className="service-errors">{errors.logradouro}</div>
                        <input
                            id="numero"
                            name="numero"
                            placeholder="Número"
                            type="number"
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
                            onChange={handleChange}
                            value={values.cep}
                        />
                        <div className="service-errors">{errors.cep}</div>
                        <input
                            id="cidade"
                            name="cidade"
                            placeholder="Cidade"
                            type="text"
                            onChange={handleChange}
                            value={values.cidade}
                        />
                        <div className="service-errors">{errors.cidade}</div>
                        <input
                            id="estado"
                            name="estado"
                            placeholder="Estado"
                            type="text"
                            onChange={handleChange}
                            value={values.estado}
                        />
                        <div className="service-errors">{errors.estado}</div>

                        <label htmlFor="descricao">Descrição da Solicitação: </label>
                        <textarea id="descricao" value={values.descricao} onChange={handleChange} />
                        <div className="service-errors">{errors.descricao}</div>
                    </div>
                    <div className="service-item">
                        <div className="service-title">
                            <h3>Dados do Solicitante</h3>
                        </div>
                        <input
                            id="nome"
                            name="nome"
                            placeholder="Nome do Solicitante"
                            type="text"
                            onChange={handleChange}
                            value={values.nome}
                        />
                        <div className="service-errors">{errors.nome}</div>
                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="text"
                            onChange={handleChange}
                            value={values.email}
                        />
                        <div className="service-errors">{errors.email}</div>
                        <InputMask
                            id="telefone"
                            name="telefone"
                            mask="(99) 99999-9999"
                            placeholder="Telefone"
                            type="text"
                            onChange={handleChange}
                            value={values.telefone}
                        />
                        <div className="service-errors">{errors.telefone}</div>
                        <InputMask
                            id="cpf"
                            name="cpf"
                            mask="999.999.999-99"
                            placeholder="CPF"
                            type="text"
                            onChange={handleChange}
                            value={values.cpf}
                        />
                        <div className="service-errors">{errors.cpf}</div>
                    </div>
                    
                </div>
                {loading ? <Spinner /> :
                    <Button 
                        buttonStyle="btn--primary" 
                        buttonSize="btn--small"
                        type="submit">
                        Solicitar
                    </Button>
                }
                {error && <div className="api-errors">{error}</div>}
                
            </form>
        </div>
    )
}