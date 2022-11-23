import React from "react";
import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/326407531.webp?k=5c43961ad7134cc37e4c1d8de225bcd90f74d5df4c5daa8dace98305e3c5a387&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Fab Hotel New Central</h1>
        <span className="siDistance">4km from center</span>
        <span className="siTaxiOp">Free airport Taxi</span>
        <span className="siSubtitle">Room with Air conditioning</span>
        <span className="siFeatures">
          Entire room . 1 bathroom .21m<sup>2</sup> 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You Can cancel later,so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">Rs.7900</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availabilities</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
