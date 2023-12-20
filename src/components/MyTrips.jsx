import React from 'react'
import TripCard from './TripCard'
import axios from 'axios'

const MyTrips = ({tripDataList}) => {
         
    
  return (
    <div>
        <h1>My Trips</h1>
      {tripDataList.map((tripData, id) => (
      <TripCard key={id} {...tripData} />
      ))}
    </div>
  )
}

export default MyTrips
