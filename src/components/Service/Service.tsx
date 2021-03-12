import { withFormik } from 'formik'
import * as Yup from 'yup'
import { ServiceForm } from './ServiceForm'

export interface FormValues {
  nome: string
  email: string
  telefone: string
  cpf: string
  servicoId: number
  logradouro: string
  numero: string
  cep: string
  estado: string
  descricao: string
  cidade: string
  handleSubmit?: any
}

export const Service = withFormik<FormValues, FormValues>({
  mapPropsToValues: props => ({ ...props }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Formato invalido de e-mail').required("Preencha o email"),
    nome: Yup.string().required("Preencha o nome"),
    telefone: Yup.string().required("Preencha o telefone"),
    logradouro: Yup.string().required("Preencha o logradouro"),
    numero: Yup.number().required("Preencha o número"),
    cep: Yup.string().required("Preencha o cep"),
    cpf: Yup.string().required("Preencha o cpf"),
    estado: Yup.string().required("Preencha o estado"),
    cidade: Yup.string().required("Preencha a cidade"),
    descricao: Yup.string().required("Preencha a descricao")
  }),

  handleSubmit(form: FormValues, { props, setSubmitting, setErrors }) {
    props.handleSubmit(form)
  }
})(ServiceForm);
