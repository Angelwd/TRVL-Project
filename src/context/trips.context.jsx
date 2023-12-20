import { createContext, useEffect, useState } from 'react'

import axios from 'axios'

const TripContext = createContext()

const TripProvider = ({children}) => {

    const [trips, setTrips] = useState([])

    const getTrips = () => {
        axios
        .get("http://localhost:5005/trips")
        .then((response) => {
          setTrips(response.data)
          console.log(response.data) 
        })
        .catch((err) => {
          console.log(err)
        })
    }
 
    useEffect(() => {
        getTrips()
    }, [])

    return (
        <TripContext.Provider value={{ trips, getTrips }} >
            {children}
        </TripContext.Provider>
    )
}

export { TripContext, TripProvider }