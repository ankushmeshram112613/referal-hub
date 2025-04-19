import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import PlatformSetup from './pages/PlatformSetup'

function App() { 
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/platformSetup" element={<PlatformSetup />} />
    </Routes>
  )
}

export default App
