import React, { useRef, useState } from "react";
import { Avatar, Image } from "antd-mobile";
import SearchImage from "../assets/search.png";
import { SearchBar } from "antd-mobile";
import SearchIcon from "../assets/search.svg";
// import icon from "../assets/icon.png";
import { ReactNode } from "react";
const SerachBox = () => {
  const searchRef = useRef();
  return (
    <div style={{ position: "relative" }}>
      <Image src={SearchImage} />
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "-webkit-fill-available",
          display: "flex",
          background: "#ffffff",
          margin: "18px",
          borderRadius: "27px",
          height: "54px",
        }}
      >
        <Avatar
          style={{
            width: "80px",
            height: "80px",
            marginTop: "-6px",
            marginLeft: "-10px",
          }}
          src={SearchIcon}
        />
        <SearchBar
          style={{
            width: "-webkit-fill-available",
            margin: "auto",
            "--background": "transparent",
            "--placeholder-color": "#333333",
          }}
          icon=""
          suffix="icon"
          ref={searchRef}
          placeholder="See Location on map"
          onSearch={(val) => {
            console.log(`hello：${val}`);
          }}
          onFocus={() => {
            console.log("focussed");
          }}
          onBlur={() => {
            console.log("blurred");
          }}
          onClear={() => {
            console.log("cleared");
          }}
          onCancel={() => {
            console.log("canceled");
          }}
        />
      </div>
    </div>
  );
};

export default SerachBox;
