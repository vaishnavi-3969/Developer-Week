import React from 'react';
import { Link } from 'react-router-dom';

const Err = ({ errorCode }) => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
                <p className="text-lg mb-6">Error Code: {errorCode}</p>
                <p className="text-lg mb-6">The page you're looking for could not be found.</p>
                <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
            </div>
        </div>
    );
};

export default Err;
