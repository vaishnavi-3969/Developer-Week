import { useDescope } from '@descope/react-sdk';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const CandidateNavbar = () => {
    const { logout } = useDescope()

    const handleLogout = useCallback(() => {
        logout()
            .then(response => console.log('Successfully logged out', response))
            .catch(error => console.log('Error logging out', error));
            window.location.href = "/";
    }, [logout])

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white font-bold text-lg"><Link to="/">CareerForge360 - Candidate Dashboard</Link></h1>
                <ul className="flex space-x-4">
                    <li><Link to="/candidate_dashboard" className="text-white hover:underline">Dashboard</Link></li>
                    <li><Link to="/candidate_jobs" className="text-white hover:underline">Browse Jobs</Link></li>
                    <li><Link to="/candidate_applications" className="text-white hover:underline">My Applications</Link></li>
                    <li><Link to="/candidate_profile" className="text-white hover:underline">Profile</Link></li>
                    <li><button onClick={handleLogout} className="text-white hover:underline">Logout</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default CandidateNavbar;
