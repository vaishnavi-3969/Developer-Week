import React from 'react';
import { RecruiterNavbar } from '../../components';

const CompanyProfile = () => {
    // Static data for company profile
    const companyProfile = {
        companyName: 'ABC Company',
        industry: 'Technology',
        location: 'New York, USA',
        website: 'www.abccompany.com',
        establishedYear: 2000,
        about: 'ABC Company is a leading technology firm specializing in software development and IT services.',
        contactEmail: 'info@abccompany.com',
        contactPhone: '+1234567890',
        numberOfEmployees: 100,
        revenue: '$10 million',
    };

    return (
        <div>
            <RecruiterNavbar />
            <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4">Company Profile</h2>
                <div className="bg-white rounded-lg shadow-md p-6 flex">
                    <div className='px-10'>
                        <h3 className="text-xl font-semibold mb-2">{companyProfile.companyName}</h3>
                        <img alt="" src='https://upload.wikimedia.org/wikipedia/commons/2/2f/ABC-2021-LOGO.svg' className='r-50 w-40' />
                    </div>
                    <div>
                        <p className="text-gray-500 mb-2">Industry: {companyProfile.industry}</p>
                        <p className="text-gray-500 mb-2">Location: {companyProfile.location}</p>
                        <p className="text-gray-500 mb-2">Website: {companyProfile.website}</p>
                        <p className="text-gray-500 mb-2">Established Year: {companyProfile.establishedYear}</p>
                        <p className="text-gray-600 mb-2">About: {companyProfile.about}</p>
                        <p className="text-gray-500 mb-2">Contact Email: {companyProfile.contactEmail}</p>
                        <p className="text-gray-500 mb-2">Contact Phone: {companyProfile.contactPhone}</p>
                        <p className="text-gray-500 mb-2">Number of Employees: {companyProfile.numberOfEmployees}</p>
                        <p className="text-gray-500 mb-2">Annual Revenue: {companyProfile.revenue}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
