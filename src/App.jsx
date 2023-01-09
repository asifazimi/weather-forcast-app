import React, { useState } from "react";
import Search from "./components/search/search";
import "./App.css";

const App = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
};

export default App;
