import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // First, check if we have a valid authStatus
        if (authStatus === undefined || authStatus === null) {
            return; // Don't navigate if auth state isn't loaded yet
        }

        // Handle authentication logic
        if (authentication && !authStatus) {
            // User needs to be authenticated but isn't
            navigate("/login", { replace: true });
        } else if (!authentication && authStatus) {
            // User is authenticated but shouldn't be (like on login page)
            navigate("/", { replace: true });
        }

        setLoader(false);
    }, [authStatus, navigate, authentication])

    // Don't render anything while checking auth
    if (loader) {
        return <h1>Loading...</h1>
    }

    // If authentication required and user is not authenticated, don't render children
    if (authentication && !authStatus) {
        return null;
    }

    // If we get here, we're good to render
    return <>{children}</>
}