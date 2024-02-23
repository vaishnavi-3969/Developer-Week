import React from 'react'
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';
import { useCallback } from 'react'

const Profile = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()


    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return (
        <div>

            {
                (isSessionLoading || isUserLoading) && <p>Loading...</p>
            }
            {
                isAuthenticated && (
                    <div>
                        <p>Hi, {user.name}!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )
            }
        </div>
    )
}

export default Profile