import React from "react";
import "./featured.css";
function Featured() {
  return <div className="featured">
    <div className="featuredItem">
        <img src="https://www.hospitalitynet.org/picture/xxl_153130133.jpg?t=1627896887" alt="" className="featuredImage" />
        <div className="featuredTitles">
            <h1>Bhubaneswar</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="https://www.holidify.com/images/bgImages/KOLKATA.jpg" width={'605px'} alt="" className="featuredImage" />
        <div className="featuredTitles">
            <h1>Kolkata</h1>
            <h2>150 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2010/11/29/india-294_960_720.jpg" width={'605px'} alt="" className="featuredImage" />
        <div className="featuredTitles">
            <h1>Mumbai</h1>
            <h2>200 properties</h2>
        </div>
    </div>
  </div>;
}

export default Featured;
