import { useSession } from '@descope/react-sdk';
import { BrowserJobs, Candidate, CandidateDashboard, CandidateProfile, CompanyProfile, Home, JobPosts, Landing, MyApplications, Recruiter, RecruiterDashboard, ViewCandidates } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Err, Footer, MoveToTop } from './components';

const App = () => {
  const { isAuthenticated } = useSession();

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Landing />} exact />
          {isAuthenticated && (
            <>
              <Route path="/recruiter" element={<Recruiter />} />
              <Route path="/candidate" element={<Candidate />} />
              <Route path="/candidate_dashboard" element={<CandidateDashboard />} />
              <Route path="/candidate_jobs" element={<BrowserJobs />} />
              <Route path="/candidate_applications" element={<MyApplications />} />
              <Route path="/candidate_profile" element={<CandidateProfile />} />
              <Route path="/recruiter_dashboard" element={<RecruiterDashboard />} />
              <Route path="/recruiter_jobs" element={<JobPosts />} />
              <Route path="/recruiter_candidates" element={<ViewCandidates />} />
              <Route path="/recruiter_profile" element={<CompanyProfile />} />
            </>
          )}
          <Route path="*" element={<Err errorCode={404} />} />
        </Routes>
        <MoveToTop/>
        {isAuthenticated && <Footer />}
      </Router>
    </div>
  );
};

export default App;
