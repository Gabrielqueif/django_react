import { navigate } from 'react-router-dom'
import { jwtdecode } from 'jwt-decode'
import api from '../api'
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants'

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null)

    const RefreshToken = async () => {

    }

    const auth = async () => {

    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }
    return isAuthorized ? children : <navigate to="/login" />
}

export default ProtectedRoute