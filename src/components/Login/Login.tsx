import { withFormik } from 'formik'
import * as Yup from 'yup'
import { LoginForm } from './LoginForm'

interface FormValues {
  email: string
  password: string
}

interface MyFormProps {
  email?: string
  password?: string
  loading?: boolean
  authenticate?: any
}

export const Login = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    email: props.email || "",
    password: props.password || "",
    loading: props.loading || false
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Formato invalido de e-mail').required("Preencha o email"),
    password: Yup.string().required("Preencha a senha")
  }),

  handleSubmit({ email, password }: FormValues, { props, setSubmitting, setErrors }) {
    props.authenticate({ email, password })
  }
})(LoginForm);