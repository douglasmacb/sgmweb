import './Snackbar.css'

export interface Props {
  message: string
  show: boolean
  isSuccess?: boolean
}

export const Snackbar: React.FC<Props> = ({ show, message, isSuccess = false }: Props) => {
  return (
    <div id="snackbar" className={`${isSuccess ? 'success' : 'error'} ${show ? 'show' : ''}`}>{message}</div>
  )
}