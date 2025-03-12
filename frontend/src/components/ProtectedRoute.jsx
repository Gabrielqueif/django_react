import { navigate } from 'react-router-dom'
import { jwtdecode } from 'jwt-decode'
import api from '../api.js'
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants.js'
import { useState, useEffect } from 'react'

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])

    const RefreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
        const res = await api.post("/api/token/refresh/", { 
            refresh: refreshToken 
        }); 
        if (res.status === 200){
            localStorage.setitem(ACCESS_TOKEN, res.data.access)
            setIsAuthorized(true)
        } else {
            setIsAuthorized(false)
        }
    }catch (error) {
            console.log(error)
            setIsAuthorized(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)    
        if (!token) {
            setIsAuthorized(false)
            return
            
        }
        const decoded = jwtdecode(token)
        const tokenExpiration = decoded.exp * 1000
        const now = Date.now() / 1000

        if (tokenExpiration < now ) {   
            await RefreshToken()
        } else {
            setIsAuthorized(true)   
        }
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }
    return isAuthorized ? children : <navigate to="/login" />
}

export default ProtectedRoute