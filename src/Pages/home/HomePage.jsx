import React from "react";
import "./HomePage.css";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "./../../Components/Featured/Featured";
import PropertyList from "../../Components/propertyList/PropertyList";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import MailList from "../../Components/MailList/MailList";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </>
  );
};

export default HomePage;
