import React from 'react';
import { RecruiterNavbar } from '../../components';

const ViewCandidates = () => {
    // Static data for candidate profiles
    const candidates = [
        { id: 1, name: 'John Doe', skills: ['React', 'Node.js', 'JavaScript'], experience: '5 years' },
        { id: 2, name: 'Jane Smith', skills: ['Python', 'Django', 'SQL'], experience: '3 years' },
        { id: 3, name: 'Alice Johnson', skills: ['Java', 'Spring', 'Hibernate'], experience: '4 years' },
    ];

    return (
        <div>
            <RecruiterNavbar />
            <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4">View Candidates</h2>
                {candidates.map(candidate => (
                    <div key={candidate.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <h3 className="text-xl font-semibold mb-2">{candidate.name}</h3>
                        <p className="text-gray-500 mb-2">Skills: {candidate.skills.join(', ')}</p>
                        <p className="text-gray-500">Experience: {candidate.experience}</p>
                        <button className='bg-blue-700 text-white p-3 rounded-xl'>View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewCandidates;
