import { withFormik } from 'formik'
import * as Yup from 'yup'
import { LoginForm } from './LoginForm'

interface FormValues {
  email: string;
  password: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

export const Login = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    email: props.initialEmail || "",
    password: props.initialPassword || ""
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Formato invalido de e-mail').required("Preencha o email"),
    password: Yup.number().required("Preencha a senha")
  }),

  handleSubmit({ email, password }: FormValues, { props, setSubmitting, setErrors }) {
    console.log(email);
  }
})(LoginForm);