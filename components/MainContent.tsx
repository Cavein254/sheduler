import React from "react";
import { LuClipboardEdit } from "react-icons/lu";
const MainContent = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div>
            <h1 className="text-lg font-bold">
              Add Agent Seats to your Subscription
            </h1>
          </div>
          <div className="flex flex-row">
            <span className="rounded-md bg-blue-400 text-white mx-2">
              Published
            </span>
            <span> Last edited 1 day ago by</span>
            <span>Santi Cazorla</span>
          </div>
        </div>
        <div>
          <LuClipboardEdit className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
