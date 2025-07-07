import './App.css'
import Navbar from './layout/navbar'
import Button from './components/Button'
import Contact from './layout/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Button label="Contact us" />
      <Contact />
    </div>
  )
}

export default App
