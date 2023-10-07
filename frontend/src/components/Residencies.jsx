import data from '../utilities/slider.json'

const Residencies = () => {
    return (
        <section>
            <div className='text-3xl text-brightblue font-bold py-14 pl-12'>
                <span>Popular Residencies</span>
            </div>
            <div className='flex'>
                    {data.map((card, index) => (
                        <div className='bg-white rounded-xl flex flex-col w-72 cursor-pointer transition-all ease-in hover:scale-105 duration-200 hover:bg-lightblue p-5' key={index}>
                            <img src={card.image} alt="residency" />
                            <span className='text-brightblue text-xl font-semibold'>${card.price}</span>
                            <span className='text-blue-950 text-2xl font-bold'>{card.name}</span>
                            <span className='text-xs'>{card.detail}</span>
                        </div>
                    ))}
            </div>
        </section >
    )
}
export default Residencies