import React from 'react';

function Card({title, description, image}) {
  return (
    <div style={{ width: "30%" }}>
      <div className="card mx-2">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={image} alt={title} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">@{title}</p>
            </div>
          </div>

          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card