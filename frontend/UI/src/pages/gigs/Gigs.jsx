import React, { useState,useRef, useEffect } from "react";
import newRequest from "../../../utils/newRequest";
import GigCard from "../../components/gigCard/gigCard";
import { useQuery } from "@tanstack/react-query";
import "./Gigs.scss";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [rightMenuActive, setRightMenuActive] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef=useRef();
  const maxRef=useRef();

  const {search}=useLocation();
  // console.log(location);

  const { isLoading, error, data,refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
    newRequest
      .get(
        `gigs${search}`
      )
      .then((res) => {
        return res.data;
      }),
  })
// console.log("gigs",data);
// console.log("error",error)
  useEffect(()=>{
    refetch();
  },[sort])

  const apply=()=>{
    // console.log(minRef.current.value);
    // console.log(maxRef.current.value);
    refetch();
  }
  console.log(data);
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
            <button onClick={apply}>Apply</button>
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
          { isLoading ? "loading" : error ? "something went wrong!" : data.map((item) => (
            <GigCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
