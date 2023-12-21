import { useState, useEffect, useContext } from "react";
import { TripContext } from '../context/trips.context'
import TripCard from './TripCard'
import axios from 'axios'

const MyTrips = ({}) => {

  const [tripDataList, setTripDataList] = useState([])

  const { trips } = useContext(TripContext)

  useEffect(() => {
    setTripDataList(trips)
  }, [trips])
         
    
  return (
    <div className="mytrips">
        <h1>My Trips</h1>
        <div className="trips-container">
          {tripDataList.map((tripData, id) => (
          <TripCard key={id} {...tripData} />
          ))}
        </div>

      
    </div>
  )
}

export default MyTrips
