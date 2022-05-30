import React, { useState } from "react";
import { Rate } from "antd";
import { ReactComponent as Star } from "../assets/Star.svg";

const desc = [1, 2, 3];

const StarRating = () => {
  const [value, setValue] = useState(3);
  return (
    <div>
      <Rate
        defaultValue={2}
        count={3}
        style={{ fontSize: "16px", color: "#FA5D5D" }}
      />
    </div>
  );
};
export default StarRating;
