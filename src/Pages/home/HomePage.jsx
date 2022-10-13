import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Featured from './../../Components/Featured/Featured';
const HomePage = () => {
  return (
  <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured />
    </div>
  </>
  )
}

export default HomePage;
