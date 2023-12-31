import React from "react";
import { useState, useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TripCard from "./components/TripCard";
import "bootstrap/dist/css/bootstrap.min.css";
import TravelForm from "./components/TravelForm";
import MyTrips from "./components/MyTrips";
import axios from "axios";

import { TripContext } from "./context/trips.context";

const Home = () => {
  const [tripDataList, setTripDataList] = useState([]);

  // const [formSubmitted, setFormSubmitted] = useState(false)

  const [showForm, setShowForm] = useState(false);

  const { trips, getTrips } = useContext(TripContext);

  const handleSubmit = async (newTrip) => {
    // e.preventDefault();
    try {
      await axios
        .post("https://papayahamster-2.adaptable.app/trips", newTrip)
        .then(() => {
          getTrips();
          setShowForm(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTripDataList(trips);
  }, [trips]);
  return (
    <div className="home">
      <div>
        <h1>TRVL</h1>
        <p>
          Your Next Adventure... <br /> Personalized Travel, Perfected.
        </p>

        {showForm && (
          <TravelForm
            buttonText={"Add Trip"}
            handleSubmit={handleSubmit}
            trip={{
              destination: "",
              startDate: "",
              endDate: "",
              budget: 0,
              hotel: "",
              restaurants: "",
              activities: "",
            }}
          />
        )}

        {!showForm && (
          <button className="btn btn-light" onClick={() => setShowForm(true)}>
            Create Trip
          </button>
        )}
      </div>

      {/* {tripDataList.length > 0 && <MyTrips tripDataList={tripDataList} />} */}
    </div>
  );
};
export default Home;
