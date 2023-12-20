import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { TripContext } from "../context/trips.context";
import TravelForm from "./TravelForm";
import axios from "axios";

const apiURL = "http://localhost:5005/trips/";

const TripDetails = () => {
  const [thisTrip, setThisTrip] = useState(null);
  const [isEditing, setIsEditing] = useState(false)

  const { trips, getTrips } = useContext(TripContext);

  const { tripId } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    if (trips.length) {
      let foundTrip = trips.find((trip) => trip.id == tripId);
      console.log("Found trip ===>", foundTrip);
      setThisTrip(foundTrip);
    } else {
      getTrips();
    }
  }, [tripId, trips]);

  const handleDelete = async () => {
    try {

      let response = await axios.delete(`${apiURL}${thisTrip.id}`);
      console.log("Deleted trip==>", response.data)
      getTrips()
      navigate('/')
      
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleSubmit = (editedTrip) => {
    axios.put(`${apiURL}${thisTrip.id}`, editedTrip)
      .then((response) => {
        console.log("Edited Trip ===>", response.data)
        setThisTrip(response.data)
        getTrips()
        setIsEditing(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="trip-details">
      <div className="trip-div">
        <h1>TripDetails</h1>

       

        <h1>{thisTrip && thisTrip.destination}</h1>
        <h3>{thisTrip && thisTrip.startDate}</h3>
        <h3>{thisTrip && thisTrip.endDate}</h3>
        <h3>{thisTrip && thisTrip.budget}</h3>
        <h3>{thisTrip && thisTrip.hotel}</h3>
        <h3>{thisTrip && thisTrip.restaurants}</h3>
        <h3>{thisTrip && thisTrip.activities}</h3>

        <button onClick={toggleEdit}>Edit Trip</button>
        <button onClick={handleDelete}>Delete Trip</button>
      </div>

      {isEditing && <TravelForm buttonText={"Edit Trip"} trip={thisTrip} handleSubmit={handleSubmit}/>}
    </div>
  );
};

export default TripDetails;
