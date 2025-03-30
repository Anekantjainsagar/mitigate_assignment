import Context from "./Context";
import data from "../data/data.json";
import { useEffect, useState } from "react";

const State = (props) => {
  const [userData, setUserData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [page, setPage] = useState(1);
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [updatedStatusId, setUpdatedStatusId] = useState("");

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

    if (updatedStatusId && updatedStatus) {
      filteredData = filteredData.map((user) => {
        if (user.id === updatedStatusId) {
          user.about.status = updatedStatus;
          setUpdatedStatus("");
          setUpdatedStatusId("");
        }
      });
    }

    setUserData(filteredData);
    setPage(1);
  }, [searchText, statusValue, dateRange, updatedStatusId]);

  useEffect(() => {
    getInsights();
  }, [updatedStatusId]);

  const getInsights = () => {
    return {
      totalUsers: data.length,
      activeUsers: data.filter((user) => user?.about?.status === "ACTIVE")
        .length,
      inactiveUsers:
        data.filter((user) => user?.about?.status === "INVITED").length /
        data.length,
      blockedUsers:
        data.filter((user) => user?.about?.status === "BLOCKED").length /
        data.length,
    };
  };

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
        page,
        setPage,
        updatedStatus,
        updatedStatusId,
        setUpdatedStatus,
        setUpdatedStatusId,
        getInsights,
        userData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
