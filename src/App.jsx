import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import ErrorBoundary from './components/ErrorBoundary'
import Login from './pages/Login'
import Register from './pages/Register'
import PlatformSetUp from './pages/PlatformSetUp'
import AI_Agent from './pages/AI_Agent'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Campaign from './pages/Campaign'
import Leads from './pages/Leads'
import Payouts from './pages/Payouts'
import Promoters from './pages/Promoters'
import DashboardLayout from './components/DashboardLayout'

function App() {
  return (
    <UserProvider>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<DashboardLayout />}>
            <Route path="/platformSetup" element={<PlatformSetUp />} />
            <Route path="/aiagent" element={<AI_Agent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/payouts" element={<Payouts />} />
            <Route path="/promoters" element={<Promoters />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </UserProvider>
  )
}

export default App
