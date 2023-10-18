import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useContext, useEffect } from "react"
import UserDetailsContext from '../../context/UserDetailsContext'
import { useMutation } from 'react-query'
import { createUser } from "../utilities/api"

const Layout = () => {
    const { user, isAuthenticated } = useAuth0();
    const { setUserDetails } = useContext(UserDetailsContext);

    const { mutate } = useMutation({
        mutationKey: [user?.email],
        mutationFn: () => createUser(user?.email)
    })

    useEffect(() => {
        isAuthenticated && mutate()
    }, [isAuthenticated, mutate])
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout