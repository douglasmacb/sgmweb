import { withFormik } from 'formik'
import * as Yup from 'yup'
import { ServiceForm } from './ServiceForm'

interface MyFormProps {
  nomeSolicitante?: string
  emailSolicitante?: string
  telefoneSolicitante?: string
  cpfSolicitante?: string
  servicoId?: number
  logradouro?: string
  numero?: string
  cep?: string
  estado?: string
  descricao?: string
  cidade?: string
  handleSubmit: any
}

export interface FormValues {
  nomeSolicitante?: string
  emailSolicitante?: string
  telefoneSolicitante?: string
  cpfSolicitante?: string
  servicoId?: number
  logradouro?: string
  numero?: string
  cep?: string
  estado?: string
  descricao?: string
  cidade?: string
}

export const Service = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    cep: props.cep || '',
    emailSolicitante: props.emailSolicitante || '',
    telefoneSolicitante: props.telefoneSolicitante || '',
    nomeSolicitante: props.nomeSolicitante || '',
    cpfSolicitante: props.cpfSolicitante || '',
    servicoId: props.servicoId || 1,
    logradouro: props.logradouro || '',
    numero: props.numero || '',
    estado: props.estado || '',
    descricao: props.descricao || '',
    cidade: props.cidade || '',
  }),

  validationSchema: Yup.object().shape({
    emailSolicitante: Yup.string().email('Formato invalido de e-mail').required("Preencha o email"),
    nomeSolicitante: Yup.string().required("Preencha o nome"),
    telefoneSolicitante: Yup.string().required("Preencha o telefone"),
    logradouro: Yup.string().required("Preencha o logradouro"),
    numero: Yup.number().required("Preencha o número"),
    cep: Yup.string().required("Preencha o cep"),
    cpfSolicitante: Yup.string().required("Preencha o cpf"),
    estado: Yup.string().required("Preencha o estado"),
    cidade: Yup.string().required("Preencha a cidade"),
    descricao: Yup.string().required("Preencha a descricao")
  }),

  handleSubmit(form: FormValues, { props, setSubmitting, setErrors }) {
    props.handleSubmit(form)
  }
})(ServiceForm);
