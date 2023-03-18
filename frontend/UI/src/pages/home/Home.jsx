import React from "react";
import Featued from "../../components/Featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";
import "./Home.scss";
import Fade from "react-reveal/Fade";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featued />
      <TrustedBy />

      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => {
          return <CatCard key={card.id} item={card} />;
        })}
      </Slide>

      <Fade top className="fadeCustom">
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A Whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src="/img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Fing High-quality services at every price point.No hourly
                rates.just project-based pricing.
              </p>
              <div className="title">
                <img src="/img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Fing High-quality services at every price point.No hourly
                rates.just project-based pricing.
              </p>
              <div className="title">
                <img src="/img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Fing High-quality services at every price point.No hourly
                rates.just project-based pricing.
              </p>
              <div className="title">
                <img src="/img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Fing High-quality services at every price point.No hourly
                rates.just project-based pricing.
              </p>
            </div>
            <div className="item">
              <video src="/img/video.mp4" controls></video>
            </div>
          </div>
        </div>
      </Fade>
      <Fade top>
        <div className="features-2">
          <div className="dark">
            <div className="item">
              <h1 className="title1">
                TaskGenius <span>business</span>
              </h1>
              <h1 className="title2">
                A business solution
                <br></br> designed for <i>teams</i>
              </h1>

              <p>
                Upgrade to a curated experience packed with tools and benefits,
                dedicated to businesses
              </p>

              <div className="title">
                <img src="/img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="title">
                <img src="/img/check.png" alt="" />
                Get matched with the perfect talent by a customer success
                manager
              </div>
              <div className="title">
                <img src="/img/check.png" alt="" />
                Manage teamwork and boost productivity with one powerful
                workspace
              </div>

              <button>Explore TaskGenius Business</button>
            </div>
            <div className="item">
              <img
                className="img2"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Fade>

      <div className="projectDiv">
        <h1>Some Projects made by our freelancers</h1>
        <Slide slidesToShow={4} arrowsScroll={4}>
          {projects.map((card) => {
            return <ProjectCard key={card.id} item={card} />;
          })}
        </Slide>
      </div>
    </div>
  );
};

export default Home;
