import React from "react";
// import Slide from "../../components/Slide/Slide";
import Slider from "infinite-react-carousel";
import "./Gig.scss";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";

const Gig = () => {
  const { id } = useParams();
  // console.log("id",id);
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  // console.log(data);
  const userId = data?.userId;
  // console.log(userId);
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  // console.log("dataUser",dataUser)
  // console.log("Features:",data.features)
  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadCrumbs">
              Graphics & Design {">"} Ai Artist
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : error ? (
              "something went wrong!"
            ) : (
              <div className="user">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a10234b8eb89588e6f20e29441096929-1675102168103/99684e60-0d8a-4517-bdeb-2512a0dfbfd6.png"
                  alt=""
                />
                <span>sashank parmar</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}

                    <span>
                      {" "}
                      {Math.round(data.totalStars / data.starNumber)}
                    </span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </Slider>
            <h2>About this gig</h2>
            <p>{data.desc}</p>

            {isLoadingUser ? (
              "loading"
            ) : error ? (
              "something went wrong!"
            ) : (
              <div className="seller">
                <h2>About the Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}

                        <span>
                          {" "}
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country} </span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022 </span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours </span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima culpa ipsa et libero mollitia ipsum odit, quae quia
                    fugiat earum?
                  </p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              {/* <h3>1 AI generated image</h3> */}
              <h3>{data.shortTitle}</h3>
              {/* <h2>$ 59.99</h2> */}
              <h2>{data.price}</h2>
            </div>
            {/* <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p> */}
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                {/* <span>2 Days Delivery</span> */}
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                {/* <span>3 Revisions</span> */}
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>Prompt writing</span>
                  <span>{feature}</span>
                </div>
              ))}
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Image upscaling</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Additional design</span>
              </div>
            </div>
            <Link to={`/pay/${id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
