import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from './Profile'

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
    return (
        <nav>
            <div className="flex justify-between items-center py-5 px-10 bg-lightblue text-brightblue">
                {/* <img src="" alt="logo" /> */}
                <div className="ml-8 text-2xl font-bold">
                    <a href="/">Vintage Realty</a>
                </div>
                <div className="flex gap-12 mr-4 items-center">
                    <NavLink to="/properties">Properties</NavLink>
                    {/* <a href="#residencies">Residencies</a> */}
                    {/* <a href="#value">Our value</a> */}
                    <a href="mailto:anishgarg5914@gmail.com">Contact Us</a>
                    {/* <a href="#getstarted">Get Started</a> */}
                    <a href='#'>Add Property</a>
                    {!isAuthenticated ? (<button type='submit' className='bg-brightblue rounded-md transition-all ease-in  hover:scale-125 duration-300 text-white px-6 text-xl' onClick={loginWithRedirect}>Login</button>) : (<Profile user={user} logout={logout} />)}
                    
                    {/* <button className="bg-brightblue rounded-md transition-all ease-in  hover:scale-125 duration-300 text-white">
                        <a href="mailto:anishgarg5914@gmail.com" className="px-6 text-xl">Contact</a>
                    </button> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar