import { Button } from '../Button'
import { Spinner } from '../Spinner/Spinner'
import { FormikProps } from 'formik'
import './LoginForm.css'

export interface Props {
    loading?: boolean
}

interface FormValues {
    email: string
    password: string
}

export const LoginForm = (props: Props & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    } = props;
 
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-title">
                <i className="fas fa-sign-in-alt" />
                <h1>Entrar no Sistema</h1>
            </div>
            <input
                id="email"
                name="email"
                placeholder="Email"
                type="text"
                onChange={handleChange}
                value={values.email}
            />
            <div className="login-errors">{errors.email}</div>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                onChange={handleChange}
                value={values.password}
            />
            <div className="login-errors">{errors.password}</div>
            {isSubmitting ? <Spinner /> :
                <Button 
                    buttonStyle="btn--primary" 
                    buttonSize="btn--large"
                    type="submit">
                    Entrar
                </Button>
            }
        </form>
    )
}