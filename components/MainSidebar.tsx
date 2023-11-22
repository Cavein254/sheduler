import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import MySearch from "./MySearch";
const MainSidebar = () => {
  return (
    <div className="px-4 py-2 bg-gray-100 w-1/6">
      <div className="flex flex-row w-full">
        <Image
          src="https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt="user image"
          width={50}
          height={50}
          className="rounded-[100%]"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-bold text-lg">Fikri Studio</h4>
          <h5 className="font-thin text-lg">Fikri Studio</h5>
        </div>
      </div>
      <hr className="border-[1px] border-gray-300 mt-2 -mx-4" />
      <div className="">
        <MySearch />
      </div>
      <div className="mt-6 mx-4">
        <div className="flex items-center text-bold text-lg">
          <BsSearch /> <h5 className="ml-2">Dashboard</h5>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;
