import { useCallback } from 'react'

import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';
import { Home, Landing } from './pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const { logout } = useDescope()

  const exampleFetchCall = async () => {
    const sessionToken = getSessionToken();

    fetch('your_application_server_url', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + sessionToken,
      }
    })
  }

  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={isAuthenticated ? <Home/> : <Landing/>} exact/>
      
      </Routes>
      </Router>
    </div>
  )
}

export default App;
