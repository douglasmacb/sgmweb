import React from 'react'
import { RouteProps } from 'react-router'
import { Navbar, Footer } from '../../components'
import './Layout.css'

interface ILayoutProps {
  location?: RouteProps["location"];
  children: RouteProps["children"];
}

export const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  return (
    <>
        <Navbar />
        <div className="container">
          <main>{props.children}</main>
        </div>
        <Footer />
    </>
  )
}