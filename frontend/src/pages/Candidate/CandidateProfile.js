import React from 'react'
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';
import { useCallback } from 'react'
import { CandidateNavbar } from '../../components';

const CandidateProfile = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()

    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return (
        <div>
        <CandidateNavbar/>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
                {isSessionLoading || isUserLoading ? (
                    <p>Loading...</p>
                ) : isAuthenticated ? (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Hi, {user.name}!</h2>
                        <button
                            onClick={handleLogout}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <p>You are not authenticated.</p>
                )}
            </div>
        </div>
        </div>
    )
}

export default CandidateProfile
