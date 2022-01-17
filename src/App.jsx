import React, { useState } from "react";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { FilterContext } from "./contexts/FilterContext";

function App() {
  const [filters, setFilters] = useState({
    search: "",
    year: { min: 1970, max: 2001 },
    type: "any",
  });

  console.log("filters", filters);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      <Header />
      <Content />
    </FilterContext.Provider>
  );
}

export default App;
