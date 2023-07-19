import { Tab } from "../tab/tab";
import { Description } from "../description/description";
import "./tabs.scss";
import { useState } from "react";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      tabIndex: 1,
      tabName: "Who We Are",
      tabDescription:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      tabIndex: 2,
      tabName: "What We Do",
      tabDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      tabIndex: 3,
      tabName: "Get In Touch",
      tabDescription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const handTableClick = (index) => {
    setActiveTab(-1);
    setTimeout(() => {
      setActiveTab(index);
    }, 10);
  };
  return (
    <>
      <div className="buttons">
        {tabData.map((item, index) => (
          <Tab
            className={activeTab === index ? "active-tab" : ""}
            key={index}
            buttonName={item.tabName}
            handleClick={() => handTableClick(index)}
          />
        ))}
      </div>
      {activeTab > -1 && (
        <Description
          className="content"
          contentTittle={`${tabData[activeTab].tabName}...`}
          content={tabData[activeTab].tabDescription}
        />
      )}
    </>
  );
};
