import './App.css'
import './Components/Navbar/Navbar.css'
import './Pages/Home/Home.css'
import Navbar from './Components/Navbar/Navbar'
import Router from './Routers/Router'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App
