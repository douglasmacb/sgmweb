import './Snackbar.css'

export interface Props {
  message: string
  show: boolean
}

export const Snackbar: React.FC<Props> = ({ show, message }: Props) => {
  return (
    <div id="snackbar" className={show ? 'show' : ''}>{message}</div>
  )
}