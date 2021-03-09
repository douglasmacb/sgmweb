import { withFormik } from "formik";
import * as Yup from "yup";
import { SearchForm } from './SearchForm'

interface FormValues {
  value: string;
}

interface MyFormProps {
  initialValue?: string;
  title?: string
  mask?: string,
  formValues?: any
  maxLength?: number
}

export const Search = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    value: props.initialValue || ""
  }),

  validationSchema: Yup.object().shape({
      value: Yup.string().required("Preencha o campo")
  }),

  handleSubmit({ value }: FormValues, { props, setSubmitting, setErrors }) {
    props.formValues(value)
  }
})(SearchForm);