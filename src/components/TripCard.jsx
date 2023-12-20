import React from "react";
import "/src/components/TripCard.css";
import { Link } from 'react-router-dom'

const TripCard = (props) => {
  console.log("rendering card", props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="src/Images/cancunstock.png"
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.destination}</h5>
        <h6 className="card-text">
          {" "}
          {props.startDate} {props.endDate}
        </h6>
        <Link to={`/trip-details/${props.id}`} className="btn btn-primary">View Details</Link>
        {/* <a href="#" className="btn btn-primary">
          View Details
        </a> */}
      </div>
    </div>
  );
};
export default TripCard;
