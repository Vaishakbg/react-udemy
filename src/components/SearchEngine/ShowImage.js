import React from "react";

function ShowImage({ image }) {
  return (
    <div>
      <img alt={image.alt} src={image.urls.small} />
    </div>
  );
}

export default ShowImage;
