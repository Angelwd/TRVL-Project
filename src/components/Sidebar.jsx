import React from 'react'
import "/src/Sidebar.css"
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <h2>TRVL</h2>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/mytrips'>My Trips</Link></li>
      <li><Link to='/'>New trip +</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  </div>
  )
}
export default Sidebar
