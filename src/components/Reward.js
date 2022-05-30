import React from "react";

const Reward = () => {
  return (
    <div style={styles.reward}>
      <h1 style={styles.heading}>Check the reward in this resto</h1>
      <h3 style={styles.subheading}>16 Reward</h3>
    </div>
  );
};

const styles = {
  reward: {
    background: "#fafafa",
    borderRadius: "8px",
    padding: "9px 15px",
  },
  heading: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    marginBottom: "2px",
    letterSpacing: "0.5px",

    color: "#333333",
  },
  subheading: {
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "20px",

    letterSpacing: "0.5px",
    // marginBottom: "6px",
    color: "#54A5DA",
  },
};

export default Reward;
