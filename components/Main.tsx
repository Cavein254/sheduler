import React from "react";
import MinorSidebar from "./MinorSidebar";
import MainContent from "./MainContent";

const Main = () => {
  return (
    <article className="flex flex-col px-4 pt-2 w-full h-[100vh]">
      <div>
        <h1 className="text-3xl font-bold p-4">Knowledge Base</h1>
      </div>
      <hr className="border-[1px] border-gray-300  -mx-4" />
      <div className="flex flex-row">
        <MinorSidebar />
        <MainContent />
      </div>
    </article>
  );
};

export default Main;
