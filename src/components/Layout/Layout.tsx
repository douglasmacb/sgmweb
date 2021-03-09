import { Navbar, Footer } from '../../components'
import './Layout.css'

export const Layout: React.FC = ({children}) => {
  return (
    <>
        <Navbar />
        <div className="container">
          <main>{children}</main>
        </div>
        <Footer />
    </>
  )
}