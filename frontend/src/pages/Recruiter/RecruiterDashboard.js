import React from 'react';
import { RecruiterNavbar } from '../../components';

const RecruiterDashboard = () => {
    return (
        <div>
            <RecruiterNavbar />
            <div className="min-h-screen container mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4">Recruiter Dashboard</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Welcome, Recruiter!</h3>
                    <p className="text-gray-500 mb-4">Here you can manage your job posts, view candidates, and more.</p>
                    <p className="text-gray-500 mb-4">Explore the options available in the sidebar to get started.</p>
                </div>
            </div>
        </div>
    );
};

export default RecruiterDashboard;
