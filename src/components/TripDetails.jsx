import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { TripContext } from "../context/trips.context";
import TravelForm from "./TravelForm";
import axios from "axios";

const apiURL = "https://papayahamster-2.adaptable.app";

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

      let response = await axios.delete(`${apiURL}/trips/${thisTrip.id}`);
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
    axios.put(`${apiURL}/trips/${thisTrip.id}`, editedTrip)
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



    ///////////////////

    <div className="modal" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    
    </div>
  );
};

export default TripDetails;
