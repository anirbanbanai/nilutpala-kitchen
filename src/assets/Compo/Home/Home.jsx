import React from 'react';
import './Home.css'
import img from '../../../../public/nilupic/nilu/IMG-20230418-WA0033.jpg'
import img2 from '../../../../public/nilupic/nilu/IMG-20230418-WA0000.jpg'
import img3 from '../../../../public/nilupic/nilu/IMG-20230418-WA0032.jpg'
import img4 from '../../../../public/nilupic/nilu/IMG-20230418-WA0034.jpg'
const Home = () => {
    return (
        <div className=' mt-5 w-[85%] h-72 mx-auto'>
            <h3 className='text-3xl text-center font-bold text-blue-700 mb-5'>It's Nilu</h3>
            <div className='bg-blue-200 p-5 rounded-xl grid md:grid-cols-2'>
                <div>
                    <img className='w-[100%] p-4 rounded-2xl' src={img} alt="" />
                </div>
                <div>
                    <img className='w-[100%] p-4 rounded-2xl' src={img2} alt="" />
                </div>
                <div>
                    <img className='w-[100%] p-4 rounded-2xl' src={img3} alt="" />
                </div>
                <div>
                    <img className='w-[100%] p-4 rounded-2xl' src={img4} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;