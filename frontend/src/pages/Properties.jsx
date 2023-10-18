import { FaSearchLocation } from 'react-icons/fa';
import useProperties from '../hooks/useProperties';
import { CircleLoader } from 'react-spinners';
import PropertyCards from '../components/PropertyCards';

const Properties = () => {
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
        <div>
            <div className='flex justify-center mt-14'>
                <div className="bg-white flex justify-between py-3 px-3 items-center rounded-full shadow-custom1 shadow-blue-200 w-[30rem]">
                    <FaSearchLocation color="#00ABE4" size={23} />
                    <input type="text" className="outline-none border-none text-sm" placeholder="Search by city or country" />
                    <button className="bg-brightblue rounded-full px-4 transition-all ease-in hover:scale-110 duration-300 text-white h-8">Search</button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-20 mb-8 mx-7'>
                {data.map((card, i) => (
                    <PropertyCards card={card} key={i} />
                ))}
            </div>
        </div>
    );
}

export default Properties;
