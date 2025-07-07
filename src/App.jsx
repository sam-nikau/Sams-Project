import './App.css'
import Navbar from './layout/navbar'
import Button from './components/Button'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <div className="lg:mx-12">
        <Outlet />
      </div>
      <Button label="Contact us" onClick={() => navigate('/contact')} />
    </div>
  )
}

export default App
