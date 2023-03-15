import React from "react";
import Featued from "../../components/Featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";

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
    </div>
  );
};

export default Home;
