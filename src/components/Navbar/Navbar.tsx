import * as React from 'react'
import { MenuItems } from './MenuItems'
import { Button } from '../Button'
import { Logo } from '../../components'
import './Navbar.css'
import { IRootState } from '../../store'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

interface MenuItem {
    title: string
    cName: string
    url: string
}

export const Navbar: React.FC = () => {
    const [clicked, setClicked] = React.useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const userSelector = (state: IRootState) => state.user
    const { email, roles, loggedIn } = useSelector(userSelector)

    return (
        <nav className="NavbarItems">
            <Logo />
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item: MenuItem, index) => {
                    return (
                        <li key={index}>
                            <Link onClick={handleClick} className={item.cName} to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
                {roles.includes('Admin') &&
                    <li key="dashboard">
                        <Link onClick={handleClick} className="nav-links" to="/dashboard">Dashboard</Link>
                    </li>
                }
            </ul>
            {!loggedIn ? 
                <Link to="/login"><Button cName="btn-entrar">Entrar</Button></Link> 
                :
                <div className='navbar-user'>
                    <p className='email'>{email}</p>
                    <Link to="/logout"><Button cName="btn-entrar">Sair</Button></Link>
                </div>
            }
            
        </nav>
    ) 
}
