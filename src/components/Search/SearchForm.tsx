import * as React from 'react'
import { Button } from '../Button'
import InputMask from 'react-input-mask';
import { FormikProps } from 'formik'
import './SearchForm.css'

export interface Props {
    title?: string
    mask?: string,
    maxLength?: number
    loading?: boolean
}

interface FormValues {
    value: string
}

export const SearchForm = (props: Props & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        loading,
        mask,
        title,
        maxLength
    } = props;

    const maskInput = mask ? mask : ""

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label className="title">{title}</label>
            <InputMask
                mask={maskInput}
                value={values.value}
                id="value"
                name="value"
                maxLength={maxLength}
                onChange={handleChange}
                className={`input-container input`}
            />
            <div className="errors">
                {errors.value}
            </div>
            <Button
                buttonStyle="btn--secondary"
                buttonSize="btn--small"
                type="submit"
                loading={loading}>
                Consultar
            </Button>
        </form>
    )
}