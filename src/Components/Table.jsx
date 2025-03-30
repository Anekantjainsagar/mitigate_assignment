import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context/Context";
import UserBlock from "./UserBlock";
import Pagination from "./Pagination";

const Table = () => {
  let tableRef = useRef();
  const [tempData, setTempData] = useState([]);
  const { getData, page } = useContext(Context);

  useEffect(() => {
    let startVal = (page - 1) * 10;
    setTempData(getData(startVal, startVal + 5));

    const ref = tableRef.current;
    ref.addEventListener("scroll", handleScroll);

    return () => {
      ref.removeEventListener("scroll", handleScroll);
    };
  }, [getData, page]);

  const handleScroll = () => {
    let startVal = (page - 1) * 10;
    const { scrollTop, scrollHeight, clientHeight } = tableRef.current;

    if (
      scrollTop + clientHeight >= scrollHeight - 5 &&
      tempData?.length !== 10
    ) {
      setTempData(getData(startVal, startVal + 10));
    }
  };

  return (
    <div>
      <div className="mt-6 bg-white rounded-xl">
        <div className="grid grid-cols-6 py-5 px-6 text-lg text-gray-500 font-medium mb-1">
          {[
            "Name",
            "Email",
            "Start Date",
            "Invited by",
            "Status",
            "Action",
          ].map((col, idx) => {
            return (
              <p key={idx} className={`text-${idx === 0 ? "start" : "center"}`}>
                {col}
              </p>
            );
          })}
        </div>
        <div className="h-[43vh] overflow-y-auto" ref={tableRef}>
          {tempData?.map((user, idx) => {
            const isLast = idx === tempData.length - 1;
            return (
              <div key={idx}>
                <UserBlock {...user} />
                {!isLast && (
                  <div className="my-2.5 w-[98%] mx-auto border-t border-gray-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Table;
