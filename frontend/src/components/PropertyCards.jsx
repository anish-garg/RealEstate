/* eslint-disable react/prop-types */
import { AiFillHeart } from 'react-icons/ai'
import { truncate } from 'lodash'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const PropertyCards = ({ card }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='bg-white rounded-xl flex flex-col w-72 h-[22rem] cursor-pointer transition-all ease-in hover:scale-105 duration-200 hover:bg-gradient-to-t from-lightblue ... p-5' onClick={() => navigate(`../properties/${card.id}`)}>
                <img src={card.image} alt="residency" className='rounded-xl h-44' />
                <div className='relative bottom-0'>
                    <AiFillHeart size={25} />
                </div>
                <span className='text-brightblue text-xl font-semibold py-3
                            '>${card.price}</span>
                <span className='text-blue-950 text-2xl font-bold pb-2'>{truncate(card.title, { length: 15 })}</span>
                <span className='text-xs'>{truncate(card.description, { length: 80 })}</span>
            </div>
        </div>
    )
}

export default PropertyCards