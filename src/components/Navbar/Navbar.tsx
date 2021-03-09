import * as React from 'react'
import { MenuItems } from './MenuItems'
import { Button } from '../Button'
import './Navbar.css'

interface MenuItem {
    title: string
    cName: string
    url: string
}

export const Navbar = () => {
    const [clicked, setClicked] = React.useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Prefeitura de Bom Destino</h1>
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
            <Button>Entrar</Button>
        </nav>
    ) 
}
