import React, { useState } from 'react';
import { CandidateNavbar } from '../../components';

const MyApplications = () => {
    const [applications] = useState([
        {
            id: 1,
            title: 'Frontend Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'Pending',
        },
        {
            id: 2,
            title: 'Backend Developer',
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            status: 'Rejected',
        },
        {
            id: 3,
            title: 'Full Stack Developer',
            description: 'Nulla facilisi. Nullam scelerisque bibendum eros id rhoncus.',
            status: 'Accepted',
        },
        {
            id: 4,
            title: 'Frontend Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'Pending',
        },
        {
            id: 5,
            title: 'Backend Developer',
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            status: 'Rejected',
        },
        {
            id: 6,
            title: 'Full Stack Developer',
            description: 'Nulla facilisi. Nullam scelerisque bibendum eros id rhoncus.',
            status: 'Accepted',
        },
    ]);

    return (
        <div>
            <CandidateNavbar />
            <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4">My Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applications.map((application) => (
                        <div key={application.id} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
                            <p className="text-gray-500 mb-2">Status: {application.status}</p>
                            <p className="text-gray-600 mb-4">{application.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyApplications;
