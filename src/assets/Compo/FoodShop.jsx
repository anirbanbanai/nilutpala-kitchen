import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const FoodShop = () => {
    const load = useLoaderData([]);
    console.log(load)
    return (
        <div className='text-center'>
            <h3 className='text-2xl font-semibold'>This s FoodShop</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    load.map(m=><Cart key={m.recipe_name} main={m}></Cart>)
                }
            </div>
        </div>
    );
};

export default FoodShop;