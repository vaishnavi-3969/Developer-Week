import React from 'react';
import { useDescope, useSession, useUser } from '@descope/react-sdk';
import { Descope } from '@descope/react-sdk';
import { getSessionToken } from '@descope/react-sdk';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiLogOut } from 'react-icons/fi';

const Landing = () => {
    const { isAuthenticated, isSessionLoading } = useSession();
    const { user, isUserLoading } = useUser();
    const { logout } = useDescope();
  
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 min-h-screen flex items-center justify-center"
        >
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Welcome to CareerForge360</h1>
                <p className="text-lg mb-6">Your one-stop platform for virtual job fairs, connecting talented job seekers with top recruiters worldwide.</p>
                <div className="flex justify-center items-center mb-4">
                    {isAuthenticated ? (
                        <>
                            <button onClick={logout} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
                                <FiLogOut className="mr-2" />
                                Logout
                            </button>
                        </>
                    ) : (
                        <Descope
                            flowId="sign-up-or-in"
                            theme="light"
                            onSuccess={(e) => {
                                console.log(e.detail.user.name);
                                console.log(e.detail.user.email);
                            }}
                            onError={(err) => {
                                console.log("Error!", err);
                            }}
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Landing;
