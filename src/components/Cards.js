import React from "react";
import Title from "./Title";
const Cards = ({ imageUrl, title, desc }) => {
  return (
    <>
      <div className="industryitem">
        <div className="industryitem-background">
          <div className="industryitem-backgroundhover" />
        </div>
        <div className="item-content">
          <div className="item-icon">
            <div className="item-iconholder">
              <img src={imageUrl} alt={title} />
            </div>
            <h3>
              <Title title={title} />
            </h3>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
