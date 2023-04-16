import React, { useState, useRef, useEffect } from "react";
import newRequest from "../../../utils/newRequest";
import GigCard from "../../components/gigCard/gigCard";
import { useQuery } from "@tanstack/react-query";
import "./Gigs.scss";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [rightMenuActive, setRightMenuActive] = useState(false);
  const [sort, setSort] = useState("sales");
  // const minRef = useRef();
  // const maxRef = useRef();
  const [minRef,setMinRef]=useState(0);
  const [maxRef,setMaxRef]=useState(20000);

  const { search } = useLocation();
  // console.log(location);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get(`gigs?${search}&min=${minRef}&max=${maxRef}&sort=${sort}`).then((res) => {
        return res.data;
      }),
  });
  // console.log("gigs",data);
  // console.log("error",error)
  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
 
    refetch();
  };
  // console.log(data);
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
          Explore the boundaries of art and technology with TaskGenius AI
          artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" onChange={(e)=>setMinRef(e.target.value)} />
            <input type="text" placeholder="max" onChange={(e)=>setMaxRef(e.target.value)}/>
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
          {isLoading
            ? "loading"
            : error
            ? "something went wrong!"
            : data.map((item) => <GigCard key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
