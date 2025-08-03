import React from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CA from './pages/CA.jsx'
import GS from './pages/GS.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <div>
      <NavBar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<GS />} />
            <Route path='/latest' element={<CA />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>

      <Footer />
    </div>
  )
}

export default App