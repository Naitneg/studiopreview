import React from "react";
import "./workcard.css";

const punet = [
  {
    image: "https://i.insider.com/5eac8da748d92c3d275bb2de?width=700",
    title: "Wedding",
    description: "Photo by Filan Fisteku",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-adorable-baby-child-with-warm-white-and-pink-royalty-free-image-892959344-1545665418.jpg",
    title: "Baby",
    description: "Photo by Filan Fisteku",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-birthday-party-games-1575412704.jpg",
    title: "Party",
    description: "Photo by Filan Fisteku",
  },
  {
    image:
      "https://www.freelogoservices.com/blog/wp-content/uploads/digital-graphic-designer.jpg",
    title: "Working",
    description: "Photo by Filan Fisteku",
  },
];

function Workcard() {
  return (
    <div className="punet">
      {punet.map((puna) => (
        <div
          key={Math.random()}
          className="punet-1"
          style={{
            backgroundImage: `url("${puna.image}")`,
          }}
        >
          <div className="caption">
            <h2>{puna.title}</h2>
            <p>{puna.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Workcard;
