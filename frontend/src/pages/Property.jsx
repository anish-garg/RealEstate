import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../utilities/api';
import { CircleLoader } from 'react-spinners';
import { FaShower } from 'react-icons/fa'
import { MdOutlineBedroomChild, MdLocationOn } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'

const Property = () => {
    const { pathname } = useLocation()
    // console.log(pathname);
    const id = pathname.split("/").splice(-1)[0];
    // console.log(id);
    const { data, isError, isLoading } = useQuery(["resd", id], () => getProperty(id));
    if (isError) {
        return (
            <div>
                <span>Error while fetching the property</span>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className='flex h-screen w-screen justify-center items-center'>
                <CircleLoader color="#00ABE4"
                />
            </div>
        )
    }

    return (
        <div>
            <div className='flex justify-center'>
                <img src={data.image} alt="house" className='w-full h-[30rem]' />
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
                        {data.facilities.bedrooms} bedrooms
                    </span>
                    <span className='flex gap-2'>
                        <FaShower color='#172554' size={20} /> {data.facilities.bathrooms} bathrooms
                    </span>
                    <span className='flex gap-2'>
                        <AiFillCar color='#172554' size={20} />{data.facilities.parking} parking
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
                    <button className="bg-brightblue rounded-md px-64 transition-all ease-in hover:scale-110 duration-300 text-white h-8">
                        Book a Visit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Property