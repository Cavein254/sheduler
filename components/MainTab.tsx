import React from "react";
import Tab from "./Tab";
import { BsNewspaper, BsGraphUp } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

const tabs = [
  {
    label: "Content",
    content: "Content",
    icon: <BsNewspaper />,
  },
  { label: "Insight", content: "Insight", icon: <BsGraphUp /> },
  {
    label: "Notes",
    content: <div>Content for Tab 3</div>,
    icon: <AiOutlineThunderbolt />,
  },
];

const MainTab = () => {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4">React Tabs with Tailwind CSS</h1>
      <Tab tabs={tabs} />
    </div>
  );
};

export default MainTab;
