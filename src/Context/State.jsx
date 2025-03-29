import Context from "./Context";
import data from "../data/data.json";
import { useEffect, useState } from "react";

const State = (props) => {
  const [userData, setUserData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [dateRange, setDateRange] = useState("");

  useEffect(() => {
    let filteredData = data;

    if (searchText) {
      filteredData = filteredData.filter((user) =>
        user?.about?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
    }

    if (statusValue) {
      filteredData = filteredData.filter(
        (user) =>
          user?.about?.status?.toLowerCase() === statusValue.toLowerCase()
      );
    }

    if (dateRange) {
      filteredData = filteredData.filter((user) => {
        const [month, day, year] = user?.details?.date?.split(".") || [];
        const userDate = new Date(`${year}-${month}-${day}`);
        const selectedDate = new Date(dateRange);

        return userDate > selectedDate;
      });
    }

    setUserData(filteredData);
  }, [searchText, statusValue, dateRange]);

  const getData = (start = 0, end) => {
    return userData?.slice(start, end);
  };

  return (
    <Context.Provider
      value={{
        getData,
        setSearchText,
        searchText,
        statusValue,
        setStatusValue,
        dateRange,
        setDateRange,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
