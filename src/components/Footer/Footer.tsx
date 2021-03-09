import * as React from 'react'
import './Footer.css'

export const Footer = () => {

    return (
        <footer className="footerItems">
            <h3>Prefeitura de Bom Destino &copy; 2021</h3>
            <div className="social-medias">
                <p>Redes Sociais: </p>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <i className="fab fa-instagram-square"></i>
            </div>
        </footer>
    ) 
}
