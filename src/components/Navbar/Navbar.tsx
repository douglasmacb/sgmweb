import * as React from 'react'
import { MenuItems } from './MenuItems'
import { Button } from '../Button'
import { Logo } from '../../components'
import './Navbar.css'
import { IRootState } from '../../store'
import { useSelector } from 'react-redux'

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
    const { loggedIn } = useSelector(userSelector)

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
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
            {!loggedIn ? 
                <a href="/login"><Button cName="btn-entrar">Entrar</Button></a> :
                <a href="/logout"><Button cName="btn-entrar">Sair</Button></a>
            }
            
        </nav>
    ) 
}
