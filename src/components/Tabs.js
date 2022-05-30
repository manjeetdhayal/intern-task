import React from "react";
import { CapsuleTabs } from "antd-mobile";
import "./Tabs.css";
import Card from "./Card";
import tabList from "./Data";
// const tabList = ["Ice Cream", "Snacks", "Coffee", "Sweet Corns"];
const Tabs = () => {
  return (
    <div>
      <CapsuleTabs defaultActiveKey="1">
        {tabList.map((product, idx) => {
          return (
            <CapsuleTabs.Tab title={product.title} key={idx + 1}>
              {product.items.map((data, idx) => {
                return (
                  <Card
                    avatar={data.avatar}
                    name={data.name}
                    basePrice={data.basePrice}
                    curPrice={data.curPrice}
                    key={idx + 1}
                  />
                );
              })}
            </CapsuleTabs.Tab>
          );
        })}
      </CapsuleTabs>
    </div>
  );
};

export default Tabs;
