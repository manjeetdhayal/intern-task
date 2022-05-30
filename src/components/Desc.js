import React from "react";
import StarRating from "./Rate";

const Desc = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "21px",
      }}
    >
      <h2 style={styles.heading}>Monica Gamage Shop</h2>
      <h4 style={styles.subheading}>Wattala, Sri Lanka</h4>
      <StarRating />
    </div>
  );
};

const styles = {
  heading: {
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "19px",
    marginBottom: "6px",
    letterSpacing: "0.5px",

    color: "#000000",
  },
  subheading: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "19px",

    letterSpacing: "0.5px",
    marginBottom: "6px",
    color: "rgba(0,0,0,0.5)",
  },
};
export default Desc;
