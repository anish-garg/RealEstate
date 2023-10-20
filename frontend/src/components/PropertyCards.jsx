/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiFillHeart } from 'react-icons/ai'
import { truncate } from 'lodash'
import { useNavigate } from 'react-router-dom'
import Heart from './Heart';
// eslint-disable-next-line react/prop-types
const PropertyCards = ({ card }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='bg-white rounded-xl flex flex-col w-72 h-[20.5rem] cursor-pointer transition-all ease-in hover:scale-105 duration-200 hover:bg-gradient-to-t from-lightblue ... px-5' onClick={() => navigate(`../properties/${card.id}`)}>
                <img src={card.image} alt="residency" className='rounded-xl h-44' />
                <div className='relative'>
                    {/* <Heart id={card?.id} /> */}
                </div>
                <span className='text-brightblue text-xl font-semibold pt-3 pb-1
                            '>${card.price}</span>
                <span className='text-blue-950 text-2xl font-bold pb-1'>{truncate(card.title, { length: 15 })}</span>
                <span className='text-xs'>{truncate(card.description, { length: 80 })}</span>
            </div>
        </div>
    )
}

export default PropertyCards