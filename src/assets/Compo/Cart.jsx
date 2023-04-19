import React from 'react';

const Cart = ({main}) => {
    return (
        <div className='rounded-xl p-8 m-3 border border-red-700 '>
            <h2 className='text-2xl font-semibold mb-5'>Name : {main.recipe_name}</h2>
            <img className='w-[460px] h-[250px] rounded-2xl mx-auto mb-5' src={main.image_url} alt="" />
            <h3 className='text-2xl'><b>Description:</b> {main.description}</h3>
        </div>
    );
};

export default Cart;