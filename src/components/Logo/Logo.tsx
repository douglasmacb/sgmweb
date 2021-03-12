import logo from '../../assets/images/emblema-prefeitura.svg'
import './Logo.css'

export const Logo = () => {
  return (
    <div className="logo">
        <img src={logo} alt="" className="logo-image" />
        <div className="logo-text">
            <h1>Prefeitura</h1>
            <h1>Bom Destino</h1>
        </div>
    </div>
  )
}