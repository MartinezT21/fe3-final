import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Context from './Context/Context'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path='*' element={<h1>Page not found - Error 404</h1>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App