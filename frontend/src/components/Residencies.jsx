// import data from '../utilities/slider.json'
import PropertyCards from './PropertyCards'
import useProperties from '../hooks/useProperties';
import { CircleLoader } from 'react-spinners';

const Residencies = () => {
    const { data, isError, isLoading } = useProperties();
    // console.log(data);
    if (isError) {
        return (
            <div>
                <span>Error while fetching the data</span>
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
        <section id='residencies'>
            <div className='text-3xl text-brightblue font-bold pt-14 pl-10 pb-6'>
                <span>Popular Residencies</span>
            </div>
            <div className='flex justify-evenly'>
                {data.slice(0, 4).map((card, index) => (
                    <PropertyCards card={card} key={index} />
                ))}
            </div >
        </section >
    )
}
export default Residencies