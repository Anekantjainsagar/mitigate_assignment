import React, { useContext, useState } from "react";
import data from "../data/data.json";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Context from "../Context/Context";

const Pagination = () => {
  const { page, setPage, userData } = useContext(Context);

  return (
    <div className="mt-6 flex items-center justify-center gap-x-4">
      <MdKeyboardDoubleArrowLeft
        className="pagination-arrow"
        onClick={() => setPage(1)}
      />
      <MdKeyboardArrowLeft
        className="pagination-arrow"
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
          }
        }}
      />
      <div className="text-xl px-1">
        Page
        <select
          value={page}
          onChange={(e) => setPage(e.target.value)}
          className="mx-2 px-2 py-1 rounded-md outline-none"
        >
          {Array.from({ length: userData.length / 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>{" "}
        of {Math.round(userData.length / 10)}
      </div>
      <MdKeyboardArrowRight
        className="pagination-arrow"
        onClick={() => {
          if (page < Math.round(userData.length / 10)) {
            setPage(page + 1);
          }
        }}
      />
      <MdKeyboardDoubleArrowRight
        className="pagination-arrow"
        onClick={() => setPage(Math.round(userData.length / 10))}
      />
    </div>
  );
};

export default Pagination;
