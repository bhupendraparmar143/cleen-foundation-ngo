
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  const location = useLocation()
  const hideNavbar = location.pathname.startsWith('/cleen-foundation-ngo/student')

  return (
    <>      
    <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <Outlet />  
      <Footer />
    </>
  )
}

export default App
