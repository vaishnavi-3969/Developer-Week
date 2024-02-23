import React from 'react';
import { RecruiterNavbar } from '../../components';
import { useUser } from '@descope/react-sdk';

const Recruiter = () => {
    const { user } = useUser()

    const recruiterDetails = {
        companyName: 'ABC Company',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        location: 'New York, USA',
        website: 'www.abccompany.com',
        about: 'ABC Company is a leading technology firm specializing in software development and IT services.',
    };

    return (
        <div>
            <RecruiterNavbar />
            <div className="container mx-auto mt-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">{recruiterDetails.companyName}</h3>
                    <p className="text-gray-500 mb-2">Recruiter: {user.name}</p>
                    <p className="text-gray-500 mb-2">Email: {recruiterDetails.email}</p>
                    <p className="text-gray-500 mb-2">Phone: {recruiterDetails.phone}</p>
                    <p className="text-gray-500 mb-2">Location: {recruiterDetails.location}</p>
                    <p className="text-gray-500 mb-2">Website: {recruiterDetails.website}</p>
                    <p className="text-gray-600 mb-4">About: {recruiterDetails.about}</p>
                </div>
            </div>
        </div>
    );
};

export default Recruiter;
