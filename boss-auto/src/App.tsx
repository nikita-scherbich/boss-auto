import { Routes, Route } from 'react-router'

import Landing from './pages/Landing'
import ServicesCatalog from './pages/ServicesCatalog'
import RequestForm from './pages/RequestForm'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<ServicesCatalog />} />
      <Route path="/request" element={<RequestForm />} />
    </Routes>
  )
}

export default App
