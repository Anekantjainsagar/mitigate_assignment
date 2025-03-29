import React, { useContext } from "react";

import Context from "../Context/Context";

import { FaSearch } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const statuses = ["Active", "Blocked", "Invited"];

const FilterInputs = () => {
  const {
    setSearchText,
    searchText,
    statusValue,
    setStatusValue,
    setDateRange,
    dateRange,
  } = useContext(Context);

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-100 rounded-xl">
      {/* Search Input */}
      <div className="flex items-center bg-white border border-gray-200/80 px-3 py-2 rounded-md text-lg w-full md:max-w-sm">
        <FaSearch className="text-gray-400 ml-1 mr-4" />
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          className="outline-none w-full bg-transparent text-gray-700"
        />
      </div>

      {/* Right Side Filters */}
      <div className="flex items-center gap-5 w-full md:w-auto">
        {/* Status Dropdown */}
        <div className="relative">
          <select
            className="appearance-none bg-white outline-none px-5 border border-gray-200/80 py-2.5 rounded-md text-lg text-gray-700 w-full md:w-auto pr-10 relative"
            defaultValue=""
            value={statusValue}
            onChange={(e) => setStatusValue(e.target.value)}
          >
            <option value="" disabled>
              Status
            </option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <IoChevronDownOutline />
          </div>
        </div>

        {/* Date Picker */}
        <div className="flex items-center border border-gray-200/80 bg-white px-5 py-2 rounded-md w-full md:w-auto">
          <input
            type="date"
            value={dateRange}
            onChange={(e) => {
              setDateRange(e.target.value);
            }}
            className="outline-none bg-transparent text-lg text-gray-700 pr-2"
          />
        </div>

        {/* Clear Filters */}
        {(searchText || statusValue || dateRange) && (
          <button
            onClick={() => {
              setStatusValue("");
              setSearchText("");
              setDateRange("");
            }}
            className="text-red-500 flex items-center px-4 gap-x-2 bg-red-500/10 py-2 rounded-md border border-red-500"
          >
            <AiOutlineClose />
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterInputs;
