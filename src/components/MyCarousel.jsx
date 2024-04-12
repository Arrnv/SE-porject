import React from "react";
import ReactCardCarousel from "react-card-carousel";

const CONTAINER_STYLE = {
  position: "relative",
  height: "100vh",
  width: "100%",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "middle"
};

const CARD_STYLE = {
  height: "50rem",
  width: "50rem",
  paddingTop: "80px",
  textAlign: "center",
  background: "#52C0F5",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "12px",
  textTransform: "uppercase",
  borderRadius: "10px",
  boxSizing: "border-box"
};

const MyCarousel = () => {
  return (
    <div className="my-20" style={CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
        <div style={CARD_STYLE}>First Card</div>
        <div style={CARD_STYLE}>Second Card</div>
        <div style={CARD_STYLE}>Third Card</div>
        <div style={CARD_STYLE}>Fourth Card</div>
        <div style={CARD_STYLE}>Fifth Card</div>
      </ReactCardCarousel>
    </div>
  );
};

export default MyCarousel;
