/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty, cancelBooking } from '../utilities/api';
import { CircleLoader } from 'react-spinners';
import { FaShower } from 'react-icons/fa'
import { MdOutlineBedroomChild, MdLocationOn } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'
import { useContext, useState } from 'react';
import useAuthCheck from '../hooks/useAuthCheck';
import BookingModal from '../components/BookingModal';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailsContext from '../../context/UserDetailsContext';
import { toast } from 'react-toastify';
import Heart from '../components/Heart';

const Property = () => {
    const { pathname } = useLocation()
    // console.log(pathname);
    const id = pathname.split("/").splice(-1)[0];
    // console.log(id);
    const { data, isError, isLoading } = useQuery(["resd", id], () => getProperty(id));

    const [modalOpened, setModalOpened] = useState(false)
    const { validateLogin } = useAuthCheck();
    const { user } = useAuth0()
    const { userDetails: { bookings }, setUserDetails } = useContext(UserDetailsContext);

    // const { mutate: cancelBooking } = useMutation({
    //     mutationFn: () => cancelBooking(id, user?.email),
    //     onSuccess: () => {
    //         toast.success("Your booking is canceled");
    //         setUserDetails((prev) => ({
    //             ...prev, bookings: prev.bookings.filter((booking) => booking?.id !== id)
    //         }))
    //     }
    // })

    if (isLoading) {
        return (
            <div className='flex h-screen w-screen justify-center items-center'>
                <CircleLoader color="#00ABE4"
                />
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                <span>Error while fetching the property</span>
            </div>
        )
    }

    return (
        <div>
            <div className='flex justify-center relative'>
                <img src={data.image} alt="house" className='w-full h-[30rem]' />
                <div className='absolute right-3 top-3'>
                    <Heart id={id} />
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-evenly mt-10'>
                    <h1 className='text-blue-950 text-4xl font-bold'>
                        {data.title}
                    </h1>
                    <span className='text-brightblue text-2xl font-semibold'>
                        ${data.price}
                    </span>
                </div>
                <div className='flex justify-center gap-5'>
                    <span className='flex gap-2'>
                        <MdOutlineBedroomChild color='#172554' size={20} />
                        {data.facilities.bedrooms} Bedrooms
                    </span>
                    <span className='flex gap-2'>
                        <FaShower color='#172554' size={20} /> {data.facilities.bathrooms} Bathrooms
                    </span>
                    <span className='flex gap-2'>
                        <AiFillCar color='#172554' size={20} />{data.facilities.parking} Parking
                    </span>
                </div>
                <div className='flex flex-col items-center justify-center text-lg gap-3'>
                    <span className='text-center px-5 w-3/5'>{data.description}</span>
                    <span className='flex gap-2'>
                        <MdLocationOn size={25} />
                        <span>{data.address} &nbsp; {data.city},{data.country}</span>
                    </span>
                </div>
                <div className='flex justify-evenly'>
                    {/* {bookings?.map((booking) => booking.id).includes(id) ?
                        (<button className="bg-brightblue rounded-md px-52 transition-all ease-in hover:scale-110 duration-300 text-white h-8">
                            Cancel the Visit
                        </button>) : ()} */}
                    <button className="bg-brightblue rounded-md px-64 transition-all ease-in hover:scale-110 duration-300 text-white h-8" onClick={
                        () => {
                            validateLogin() && setModalOpened(true);
                        }}>
                        Book a Visit
                    </button>

                    <BookingModal
                        opened={modalOpened}
                        setOpened={setModalOpened}
                        propertyID={id}
                        email={user?.email}
                    />
                </div>
            </div>
        </div >
    )
}

export default Property