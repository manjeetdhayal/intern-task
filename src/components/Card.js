import React, { useState } from "react";
import { Avatar } from "antd-mobile";
import "./cards.css";

const Heart = ({ fill, stroke }) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8931 2.07333C13.5526 1.73267 13.1483 1.46243 12.7033 1.27805C12.2584 1.09368 11.7814 0.998779 11.2998 0.998779C10.8181 0.998779 10.3412 1.09368 9.89618 1.27805C9.45121 1.46243 9.04693 1.73267 8.70642 2.07333L7.99975 2.78L7.29309 2.07333C6.60529 1.38554 5.67244 0.999136 4.69975 0.999136C3.72707 0.999136 2.79422 1.38554 2.10642 2.07333C1.41863 2.76112 1.03223 3.69397 1.03223 4.66666C1.03223 5.63935 1.41863 6.5722 2.10642 7.26L2.81309 7.96666L7.99975 13.1533L13.1864 7.96666L13.8931 7.26C14.2338 6.91949 14.504 6.51521 14.6884 6.07023C14.8727 5.62526 14.9676 5.14832 14.9676 4.66666C14.9676 4.185 14.8727 3.70807 14.6884 3.26309C14.504 2.81812 14.2338 2.41383 13.8931 2.07333Z"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Card = ({ name, basePrice, curPrice, avatar }) => {
  const [fill, setFill] = useState("#ffffff");
  const [stroke, setStroke] = useState("#747474");

  const handleLike = () => {
    if (fill === "#ffffff") setFill("#FA5D5D");
    else setFill("#ffffff");

    if (stroke === "#747474") setStroke("none");
    else setStroke("#747474");
  };
  return (
    <div style={styles.cardHolder}>
      <div style={styles.left}>
        <Avatar src={avatar} style={{ width: "52px", height: "52px" }} />
        <div style={styles.list}>
          <h1 style={styles.name}> {name} </h1>

          <div>
            {basePrice > curPrice ? (
              <div style={styles.cur}>
                <s style={styles.base}>$ {basePrice}</s>$&nbsp;{curPrice}
              </div>
            ) : (
              <div style={styles.cur}>$ {curPrice}</div>
            )}
          </div>
        </div>
      </div>
      <div style={styles.right} onClick={handleLike}>
        <Heart fill={fill} stroke={stroke} />
      </div>
    </div>
  );
};

const styles = {
  cardHolder: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 12px 24px rgba(68,68,68, 0.1)",
    margin: "16px 0px",
    border: "none",
    display: "flex",
    borderRadius: "12px",
    justifyContent: "space-between",
    padding: "10px",
  },
  left: {
    display: "flex",
  },
  right: {
    paddingTop: "18px",
    paddingRight: "9px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "12px",
  },
  name: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "26px",
    margin: 0,
    padding: 0,
    Sletterspacing: "0.5px",
    color: "#333333",
  },
  base: {
    fontWeight: 400,
    color: "#747474",
    marginRight: "5px",
  },
  cur: {
    color: "#54A5DA",
    fontWeight: 700,
  },
};

export default Card;
