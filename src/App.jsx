import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import PlatformSetup from './pages/PlatformSetup'
import AI_Agent from './pages/AI_Agent'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Campaign from './pages/Campaign'
import  Leads from './pages/Leads'
import  Payouts from './pages/Payouts'
import  Promoters from './pages/Promoters'

function App() { 
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/platformSetup" element={<PlatformSetup />} />
      <Route path="/aiagent" element={<AI_Agent />} />
      <Route path="/campaign" element={<Campaign />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/payouts" element={<Payouts />} />
      <Route path="/promoters" element={<Promoters />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App
