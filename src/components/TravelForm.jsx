import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { TripContext } from "../context/trips.context";

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
    <form onSubmit={formSubmit}>
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={handleDestinationChange}
          required
        />
      </label>
      <br />

      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          required
        />
      </label>
      <br />

      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          required
        />
      </label>
      <br />

      <label>
        Budget:
        <input
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          required
        />
      </label>
      <br />

      <label>
        Hotel:
        <input
          type="text"
          value={hotel}
          onChange={handleHotelChange}
          required
        />
      </label>
      <br />

      <label>
        Restaurants:
        <input
          type="text"
          value={restaurants}
          onChange={handleRestaurantsChange}
          required
        />
      </label>
      <br />

      <label>
        Activities:
        <input
          type="text"
          value={activities}
          onChange={handleActivitiesChange}
          required
        />
      </label>
      <br />

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default TravelForm;
