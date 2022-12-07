import "./AnimalShow.css";
import React, { useState } from "react";
import bird from "../../images/svg/bird.svg";
import cat from "../../images/svg/cat.svg";
import cow from "../../images/svg/cow.svg";
import dog from "../../images/svg/dog.svg";
import gator from "../../images/svg/gator.svg";
import heart from "../../images/svg/heart.svg";
import horse from "../../images/svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div onClick={handleClick} className="animalShow">
      <img alt={type} src={svgMap[type]} width={100} className="animal" />
      <img
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
        className="heart"
      />
    </div>
  );
}

export default AnimalShow;
