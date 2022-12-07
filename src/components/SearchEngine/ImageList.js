import "./ImageList.css";
import React from "react";
import ShowImage from "./ShowImage";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ShowImage image={image} key={image.id} />;
  });
  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
