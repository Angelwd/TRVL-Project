import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { TripContext } from "../context/trips.context";
import "bootstrap/dist/css/bootstrap.min.css"


const TravelForm = ({ handleSubmit, trip, buttonText }) => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState(0);
  const [hotel, setHotel] = useState("");
  const [restaurants, setRestaurants] = useState("");
  const [activities, setActivities] = useState("");

  // const { getTrips } = useContext(TripContext)

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };
  
  const handleHotelChange = (e) => {
    setHotel(e.target.value);
  };

  const handleRestaurantsChange = (e) => {
    setRestaurants(e.target.value);
  };

  const handleActivitiesChange = (e) => {
    setActivities(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault()
    let thisTrip = {
        destination,
        startDate,
        endDate,
        budget,
        hotel,
        restaurants,
        activities
    }

    handleSubmit(thisTrip)
  }

  useEffect(() => {

        setDestination(trip.destination),
        setStartDate(trip.startDate),
        setEndDate(trip.endDate),
        setBudget(trip.budget),
        setHotel(trip.hotel),
        setRestaurants(trip.restaurants),
        setActivities(trip.activities)

  }, [])

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5005/trips", {
  //       destination,
  //       startDate,
  //       endDate,
  //       budget,
  //       hotel,
  //       restaurants,
  //       activities
  //     })
  //     .then(() => {
  //       getTrips()
  //       handleFormSubmit()
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <form  onSubmit={formSubmit}>
      <label className="form-label">Destination</label>
        <input className="form-control"
          type="text"
          value={destination}
          onChange={handleDestinationChange}
          required
        />
      
      <br />

      <label className="form-label">Start Date</label>
        <input className="form-control"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          required
        />
      
      <br />

      <label className="form-label">End Date</label>
        <input className="form-control"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          required
        />
      
      <br />

      <label className="form-label">Budget</label>
        <input className="form-control"
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          required
        />
      
      <br />

      <label className="form-label">Hotel:</label>
        <input className="form-control"
          type="text"
          value={hotel}
          onChange={handleHotelChange}
          required
        />
      
      <br />

      <label className="form-label">Restaurants</label>
        <input className="form-control"
          type="text"
          value={restaurants}
          onChange={handleRestaurantsChange}
          required
        />
      
      <br />

      <label className="form-label">Activities</label>
        <input className= "form-control"
          type="text"
          value={activities}
          onChange={handleActivitiesChange}
          required
        />
      
      <br />

      <button className="btn btn-dark" type="submit">{buttonText}</button>
    </form>
  );
};

export default TravelForm;
