import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Home></Home> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;