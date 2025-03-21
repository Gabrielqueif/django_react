import React from "react"
import { BrouserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/Login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrouserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<RegisterAndLogout />} />
        <Route> path="*" element={<NotFound />} </Route>
      </Routes>
    </BrouserRouter>
  )
}

export default App
