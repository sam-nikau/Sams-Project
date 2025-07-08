import './App.css'
import Navbar from './layout/navbar'
import Button from './components/Button'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './layout/Footer'

function App() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <div className="lg:mx-12">
        <Outlet />
      </div>
      <Button label="Contact us" onClick={() => navigate('/contact')} />
      <Footer />
    </div>
  )
}

export default App
