import React from 'react'
 import {fetchData} from "../helpers"
import { useLoaderData } from 'react-router'

//loader
export function dashboardLoader (key){
    const userName=fetchData("userName")
    return {userName}
}



const Dashboard = () => {
    const {userName}=useLoaderData()
  return (
    <div>
        <h2>{userName}</h2>
      <h1>Dashboard </h1>
    </div>
  )
}

export default Dashboard
