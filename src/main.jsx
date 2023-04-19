import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/Compo/Main';
import Home from './assets/Compo/Home/Home';
import FoodShop from './assets/Compo/FoodShop';
import Footer from './assets/Compo/Footer';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/fs",
        element:<FoodShop></FoodShop>,
        loader:()=>fetch(`food.json`)
      }
    ],
   
  },
  {
    path:'/*',
    element:<h2 className='text-6xl font-extrabold text-pink-600 text-center mt-24'> This Page Updating Soon! dear Nilu.</h2>
  },
  {
    path:"/*",
    element:"/* / index.html 200"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
