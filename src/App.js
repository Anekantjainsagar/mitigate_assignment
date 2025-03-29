import React from "react";
import Header from "./Components/Header";
import Stats from "./Components/Stats";
import FilterInputs from "./Components/FilterInputs";
import Table from "./Components/Table";

const App = () => {
  return (
    <div className="bg-gray-100 w-full h-[100vh] py-5 px-7">
      <Header />
      <Stats />
      <FilterInputs />
      <Table />
    </div>
  );
};

export default App;
