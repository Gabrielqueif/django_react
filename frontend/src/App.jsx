import React from "react"
import { BrowserRouter, Routes, Route, Navigation } from "react-router-dom"
import login from "./pages/login"
import register from "./pages/register"
import home from "./pages/home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigation to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <route
        path="/"
        element={
         <ProtectedRoute>
          <home /> 
         </ProtectedRoute>  
      }
        />
        <Route path="/Login" element={<login/>} /> 
        <Route path="/Register" element={<RegisterAndLogout/>} /> 
        <Route path="*" element={<NotFound/>} />        
      </Routes>  
    </BrowserRouter>
  )
}

export default App
