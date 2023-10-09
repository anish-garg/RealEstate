import data from '../utilities/slider.json'

const Residencies = () => {

    return (
        <section>
            <div className='text-3xl text-brightblue font-bold pt-14 pl-10 pb-6'>
                <span>Popular Residencies</span>
            </div>
            <div className='flex justify-evenly'>
                {data.map((card, index) => (
                    <div key={index}>
                        <div className='bg-white rounded-xl flex flex-col w-72 cursor-pointer transition-all ease-in hover:scale-105 duration-200 hover:bg-lightblue p-5'>
                            <img src={card.image} alt="residency" />
                            <span className='text-brightblue text-xl font-semibold py-3
                            '>${card.price}</span>
                            <span className='text-blue-950 text-2xl font-bold pb-2'>{card.name}</span>
                            <span className='text-xs'>{card.detail}</span>
                        </div>
                    </div>
                ))}
            </div >
        </section >
    )
}
export default Residencies