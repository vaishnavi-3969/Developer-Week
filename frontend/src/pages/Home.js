import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSession, useUser } from '@descope/react-sdk';

const Home = () => {
    const { isAuthenticated, isSessionLoading } = useSession();
    const { user, isUserLoading } = useUser();

    const [userType, setUserType] = useState('');

    useEffect(() => {
        if (!isSessionLoading && !isUserLoading && isAuthenticated) {

        }
    }, [isSessionLoading, isUserLoading, isAuthenticated]);

    const handleUserType = (type) => {
        setUserType(type);
    };

    return (
        <div>
            {
                !isSessionLoading && !isUserLoading && isAuthenticated ? (
                    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center"
                        >
                            <p className="text-lg mb-6">Hey {user.name}</p>
                            <h1 className="text-4xl font-bold mb-4">Welcome to CareerForge360</h1>
                            <p className="text-lg mb-6">Are you a recruiter or a candidate?</p>
                            <div className="flex justify-center space-x-4">
                                <button onClick={() => handleUserType('recruiter')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
                                    Recruiter
                                </button>
                                <button onClick={() => handleUserType('candidate')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
                                    Candidate
                                </button>
                            </div>
                            {userType && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="mt-6"
                                >
                                    <Link to={userType === 'recruiter' ? '/recruiter' : '/candidate'} className="text-blue-500 hover:underline">Continue as {userType}</Link>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                )
                    : (
                        <p>Loading...</p>
                    )
            }
        </div>
    );
};

export default Home;
