import React from "react";
import "./hotels.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Header from "./../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../Components/MailList/MailList";
const Hotels = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/350635113.jpg?k=91e0199f8634f7dd51382da52d850387d15cffcabb042ca81916f408ddd64399&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/350635107.jpg?k=18f5f240970894abccb95ca7f01daa552fc0b2b207cafdd5e26dfcf31c6d72f3&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/350635108.jpg?k=dd7d4f85b45818c9eba36f51bb6dddd7d9c9c688cc9aa1fc65657e33e2c25e4e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/350635109.jpg?k=e11f252e4d5d730b54b3440f1b0d262adaeb58fbcacdc5b303dc2a5671503f32&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/350635116.jpg?k=a474db7df6e93ca337e5a46826434459e347c4f59349d78829bab1540123512e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/350635127.jpg?k=fbc21df3107e6a6d4f3d16366de7d46bdd11a752be95c99537a2fdfcf07e8cd5&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">FabHotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Bhubaneswar</span>
          </div>
          <span className="hotelDistance">
            Excellent Location 500m from center
          </span>
          <span className="hotelPricingHighlight">
            Book a stay over Rs 9000 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => {
              return (
                <div className="hotelImgWrapper">
                  <img src={photo.src} alt="" className="hotelImg" />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in heart of Bhubaneswar</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at FabHotel New Central!
                To save at this property, all you have to do is sign in.
                Situated within 1.5 km of Bhubaneswar Station and 20 km of
                Janardana Temple, FabHotel New Central offers rooms in
                Bhubaneshwar. Featuring a shared lounge, the 3-star hotel has
                air-conditioned rooms with free WiFi, each with a private
                bathroom. The accommodation features a 24-hour front desk and
                room service for guests. At the hotel the rooms include a
                wardrobe and a flat-screen TV.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Prefer for 9-night stay!</h1>
              <span>
                Located in bhubaneswar,this property has an excellent location
                score of 9.8!
              </span>
              <h2>
                <b>Rs.45000</b>
              </h2>
              (9 nights)
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <MailList />

        {/*--------------footer to add----------------*/}
      </div>
    </div>
  );
};

export default Hotels;
