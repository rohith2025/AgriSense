import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navabr'
import HomePage from './components/homepage'
import Aboutuspage from './components/aboutuspage'
import Contactpage from './components/contactpage'
import Services from './components/services'
import footer from './components/fotter'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Wheatpage from './components/wheatpage'
import Ricepage from './components/Ricepage'
import Cornpage from './components/Cornpage'
import Carrotpage from './components/Carrotpage'
import Cottonpage from './components/Cottonpage'
import Milletspage from './components/Milletspage'
import Soyapage from './components/Soyapage'
import Sugarpage from './components/Sugarpage'
import Groundnutpage from './components/Groundnutpage'
import Applepage from './components/Apple'
import Orangepage from './components/Orangepage'
import Potatopage from './components/Potatopage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutuspage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/wheat" element={<Wheatpage/>} />
          <Route path="/rice" element={<Ricepage></Ricepage>} />
          <Route path="/corn" element={<Cornpage></Cornpage>} />
          <Route path="/carrot" element={<Carrotpage></Carrotpage>} />
          <Route path="/cotton" element={<Cottonpage></Cottonpage>} />
          <Route path="/millets" element={<Milletspage></Milletspage>} />
          <Route path="/soya" element={<Soyapage></Soyapage>} />
          <Route path="/sugarcane" element={<Sugarpage></Sugarpage>} />
          <Route path="/groundnut" element={<Groundnutpage></Groundnutpage>} />
          <Route path="/apple" element={<Applepage></Applepage>} />
          <Route path="/orange" element={<Orangepage></Orangepage>} />
          <Route path="/potato" element={<Potatopage></Potatopage>} />
          <Route path="*" element={<Potatopage></Potatopage>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App