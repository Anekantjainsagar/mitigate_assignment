import React from "react";

const Header = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="">
        <h2 className="text-3xl text-gray-800 font-semibold">User Details</h2>
        <p className="text-gray-500 text-lg w-10/12 mt-1.5">
          Information about a user, including name, email, start date, inviter,
          status, and available actions.
        </p>
      </div>
      <button className="bg-gray-800 px-5 py-1.5 text-gray-100 rounded-md">
        Download Report
      </button>
    </div>
  );
};

export default Header;
