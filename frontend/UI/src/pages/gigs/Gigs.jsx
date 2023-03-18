import React, { useState } from "react";
import GigCard from "../../components/gigCard/gigCard";
import { gigs } from "../../data";
import "./Gigs.scss";

const Gigs = () => {
  const [rightMenuActive, setRightMenuActive] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setRightMenuActive(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">TaskGenius {">"} Graphics & Design </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By </span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="/img/down.png"
              alt=""
              onClick={() => {
                setRightMenuActive(!rightMenuActive);
              }}
            />
            {rightMenuActive && (
              <div className="rightMenu">
                <span
                  onClick={() => {
                    reSort("createdAt");
                  }}
                >
                  Newest
                </span>
                <span
                  onClick={() => {
                    reSort("sales");
                  }}
                >
                  Best Selling
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigs.map((item) => (
            <GigCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
