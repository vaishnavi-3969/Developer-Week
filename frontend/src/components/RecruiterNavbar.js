import { useDescope } from '@descope/react-sdk';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const RecruiterNavbar = () => {
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
                <h1 className="text-white font-bold text-lg"><Link to="/">CareerForge360 - Recruiter Dashboard</Link></h1>
                <ul className="flex space-x-4">
                    <li><Link to="/recruiter_dashboard" className="text-white hover:underline">Dashboard</Link></li>
                    <li><Link to="/recruiter_jobs" className="text-white hover:underline">Manage Jobs</Link></li>
                    <li><Link to="/recruiter_candidates" className="text-white hover:underline">View Candidates</Link></li>
                    <li><Link to="/recruiter_profile" className="text-white hover:underline">Profile</Link></li>
                    <li><button onClick={handleLogout} className="text-white hover:underline">Logout</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default RecruiterNavbar;
