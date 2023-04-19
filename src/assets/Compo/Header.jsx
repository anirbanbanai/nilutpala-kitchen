import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='bg-slate-200 rounded-2xl w-[90%] p-5 mx-auto text-center '>
          <div className='md:flex md:justify-center'>
          <h3 className='bg-yellow-400 p-2 ml-2 rounded-xl hover:bg-yellow-100'> <Link className='text-3xl font-bold mr-5 ' to='/'>Home</Link></h3>
           <h3 className='bg-purple-400 p-2 ml-3 rounded-xl hover:bg-purple-50'> <Link className='text-3xl font-bold  mr-5' to='/fs'>Hing</Link></h3>
           <h3 className='bg-pink-400 p-2 ml-3 rounded-xl hover:bg-purple-50'> <Link className='text-3xl  font-bold mr-5' to='/about'>My-Kitchen</Link></h3>
           <h3 className='bg-green-400 p-2 ml-2 rounded-xl hover:bg-slate-50'> <Link className='text-3xl font-bold ' to='/cs'>Contact-me</Link></h3>
          </div>
           <div className='text-3xl flex mt-8'>
            <h2 className='btn btn-warning'><b>Latest </b></h2>
           <Marquee speed={100}>
  Hi everyone! This is Nilutpala. I am a content creator and Founder at "Hing"......
</Marquee>

           </div>
           <h3 className='text-xl font-semibold mt-3'><b>Today :</b> {moment().format("dddd, MMMM Do YYYY, h:mm")}</h3>
        </div>
    );
};

export default Header;