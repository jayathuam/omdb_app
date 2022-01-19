import React, { useState } from "react";

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { FilterContext } from "./contexts/FilterContext";
import { defaultMaxYear, defaultMinYear } from "./config";

function App() {
  // initial status of the filters and the search string
  const [filters, setFilters] = useState({
    search: "",
    year: { min: defaultMinYear, max: defaultMaxYear },
    type: "",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      <Header />
      <Content />
    </FilterContext.Provider>
  );
}

export default App;
