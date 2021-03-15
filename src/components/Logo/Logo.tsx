import logo from '../../assets/images/logo.svg'
import './Logo.css'

export const Logo = () => {
  return (
    <div className="logo">
        <img src={logo} alt="" className="logo-image" />
    </div>
  )
}