import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./../../Components/Header/Header";
import Navbar from "./../../Components/Navbar/Navbar";
import { useState } from "react";
import { format } from "date-fns";
import "./list.css";
import { DateRange } from "react-date-range";
import SearchItem from "./../../Components/SearchItem/SearchItem";
const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-In-Date</label>
              <span
                onClick={(e) => {
                  setOpenDate(!openDate);
                }}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => {
                    setDate([item.selection]);
                  }}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder=""
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
