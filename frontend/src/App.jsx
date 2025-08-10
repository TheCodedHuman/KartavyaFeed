import React from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/views/NavBar.jsx'
import Footer from './components/views/Footer.jsx'
import Home from './pages/Home.jsx'
import CA from './pages/CA.jsx'
import Workspace from './pages/Workspace.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import TNC from './pages/TNC.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

function App() {
  return (
    <div>
      <NavBar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workspace' element={<Workspace />} />
            <Route path='/latest' element={<CA />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/terms-and-conditions' element={<TNC />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          </Routes>
        </main>

      <Footer />
    </div>
  )
}

export default App