/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from '../hooks/useAuthCheck'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailsContext from '../../context/UserDetailsContext'
import { useMutation } from 'react-query'
import { toFav } from '../utilities/api'
import { checkFav, updateFav } from '../utilities/common'
import { toast } from 'react-toastify'

const Heart = ({ id }) => {
    const [heartColor, setHeartColor] = useState("white")
    const { validateLogin } = useAuthCheck()
    const { user } = useAuth0();
    const { userDetails: { favourites }, setUserDetails } = useContext(UserDetailsContext)

    const { mutate } = useMutation({
        mutationFn: () => toFav(id, user?.email),
        onSuccess: () => {
            setUserDetails((prev) => ({
                ...prev, favourites: updateFav(id, prev.favourites)
            }))
            // toast.success("Added to Favourites", { position: "bottom-right" })
        }
    })

    useEffect(() => {
        setHeartColor(() => checkFav(id, favourites))
    }, [favourites, id])

    const handleClick = () => {
        if (validateLogin()) {
            mutate()
            setHeartColor((prev) => prev === "#fa3e5f" ? "white" : "#fa3e5f")
        }
    }
    return (
        <AiFillHeart size={23} color={heartColor} onClick={(e) => {
            e.stopPropagation
            handleClick()
        }} />
    )
}


export default Heart