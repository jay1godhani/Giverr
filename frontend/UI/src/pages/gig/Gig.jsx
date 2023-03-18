import React from "react";
// import Slide from "../../components/Slide/Slide";
import Slider from "infinite-react-carousel";
import "./Gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Graphics & Design {">"} Ai Artist</span>
          <h1>I Will create AI generated art to your needs</h1>
          <div className="user">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a10234b8eb89588e6f20e29441096929-1675102168103/99684e60-0d8a-4517-bdeb-2512a0dfbfd6.png"
              alt=""
            />
            <span>sashank parmar</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About this dog</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae
            doloribus praesentium consectetur eveniet aliquam, architecto
            dolore. Distinctio similique ex maxime, excepturi aut unde facere
            sed quidem enim culpa quam sequi ducimus rerum voluptatem modi
            minima dicta consequatur adipisci cumque libero quaerat mollitia,
            corporis, alias qui! Quae sint nam quis voluptatibus velit optio
            ducimus error vel itaque non dolorem ipsa, sit, distinctio, aut
            ullam dicta unde! Cum possimus eius quam perferendis explicabo,
            minus odit mollitia tempore asperiores eveniet ad? Nisi quo
            excepturi temporibus? Enim earum minima voluptate accusantium
            expedita, porro iusto sint, perferendis ipsum explicabo ducimus
            saepe eos ullam molestias.
          </p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>sashank paramr</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc"> India </span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc"> India </span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc"> India </span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc"> India </span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc"> India </span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                culpa ipsa et libero mollitia ipsum odit, quae quia fugiat
                earum?
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a10234b8eb89588e6f20e29441096929-1675102168103/99684e60-0d8a-4517-bdeb-2512a0dfbfd6.png"
                  alt=""
                  className="pp"
                />
                <div className="info">
                  <span>Satvan</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>Usa</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                hic, voluptatum odio consequatur praesentium, perspiciatis odit
                facere doloribus sapiente ratione nam, aut veritatis
                accusantium? Quam maxime error soluta et qui amet nisi dicta,
                quia quaerat dolorum in impedit, tempore quisquam, expedita
                asperiores voluptates! Ratione sequi quaerat, maiores minima a
                minus.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
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
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
