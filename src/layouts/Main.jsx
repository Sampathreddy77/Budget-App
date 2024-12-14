import React from 'react'



//helper Function
 import {fetchData} from "../helpers"
import { Outlet, useLoaderData } from 'react-router'
//assets
import wave from "../assets/wave.svg"
//components
import Nav from '../components/Nav'
//
// import { fetchData } from '../helpers'
//loader
export function mainLoader (key){
    const userName=fetchData("userName")
    return {userName}
}



const Main = () => {
    const {userName}=useLoaderData()
  return (
    <div className='layout'>
        <Nav userName={userName}/>
      <main>
        <Outlet/>
        </main>
   <img src={wave} alt="wave..." />
    </div>
  )
}

export default Main




