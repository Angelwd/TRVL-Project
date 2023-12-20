import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'
import TripDetails from './components/TripDetails'

import { Routes, Route } from 'react-router-dom'



function App() {
    return (
      <div className="App">

      <Sidebar />


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/trip-details/:tripId' element={<TripDetails />}/>

        </Routes>


        
      </div>
      
  )}

export default App
