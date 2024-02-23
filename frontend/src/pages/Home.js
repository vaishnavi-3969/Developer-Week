import React from 'react'
import { useCallback } from 'react'

import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';

const Home = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()

    const exampleFetchCall = async () => {
        const sessionToken = getSessionToken();

        fetch('your_application_server_url', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + sessionToken,
            }
        })
    }

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
                        <button onClick={exampleFetchCall}>Example Fetch Call</button>
                    </div>
                )
            }
        </div>


    )

}

export default Home