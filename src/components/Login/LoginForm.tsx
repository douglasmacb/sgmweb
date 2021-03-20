import { Button } from '../Button'
import { Spinner } from '../Spinner/Spinner'
import { FormikProps } from 'formik'
import './LoginForm.css'

export interface Props {
    loading?: boolean
    error?: string
}

interface FormValues {
    email: string
    password: string
}

export const LoginForm = (props: Props & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        loading,
        error,
        handleChange,
        handleSubmit,
    } = props;
 
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-title">
                <h1>Entrar no Sistema</h1>
            </div>
            <input
                id="email"
                name="email"
                placeholder="Email"
                type="text"
                className={`input-container`}
                onChange={handleChange}
                value={values.email}
            />
            <div className="login-errors">{errors.email}</div>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                className={`input-container`}
                onChange={handleChange}
                value={values.password}
            />
            <div className="login-errors">{errors.password}</div>
            {loading ? <Spinner /> :
                <Button 
                    buttonStyle="btn--primary" 
                    buttonSize="btn--large"
                    type="submit">
                    Entrar
                </Button>
            }
            {error && <div className="api-errors">{error}</div>}
            
        </form>
    )
}