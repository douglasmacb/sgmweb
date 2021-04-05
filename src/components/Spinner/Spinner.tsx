import './Spinner.css'

type Props = React.HTMLAttributes<HTMLElement>

export const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div className="spinner"/>
  )
}