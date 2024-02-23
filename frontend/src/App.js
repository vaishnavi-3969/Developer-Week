import { useSession } from '@descope/react-sdk'
import { Candidate, Home, Landing, Recruiter } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const { isAuthenticated } = useSession()

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Landing />} exact />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/candidate" element={<Candidate />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
