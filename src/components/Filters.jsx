import React, { useContext } from "react";
import styled from "@emotion/styled";
import "react-input-range/lib/css/index.css";

import { FilterContext } from "../contexts/FilterContext";
import { Radio, YearSelector } from "../shared/components";

const FilterItemsWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const Filters = ({ ...rest }) => {
  const { filters, setFilters } = useContext(FilterContext);
  const onRadioChange = (value) => {
    setFilters({ ...filters, type: value });
  };

  const onYearChange = (value) => {
    setFilters({ ...filters, year: value });
  };

  return (
    <FilterItemsWrapper {...rest}>
      <div>
        <StyledLabel>Year</StyledLabel>
        <YearSelector
          min={1950}
          max={2022}
          value={filters.year}
          onChange={(year) => onYearChange(year)}
        />
      </div>
      <div>
        <StyledLabel>Type</StyledLabel>
        <RadioGroup>
          <Radio
            value="any"
            selected={filters.type}
            text="Any"
            onChange={(value) => onRadioChange(value)}
          />
          <Radio
            value="movie"
            selected={filters.type}
            text="Movies"
            onChange={(value) => onRadioChange(value)}
          />
          <Radio
            value="series"
            selected={filters.type}
            text="Series"
            onChange={(value) => onRadioChange(value)}
          />
          <Radio
            value="episode"
            selected={filters.type}
            text="Episodes"
            onChange={(value) => onRadioChange(value)}
          />
        </RadioGroup>
      </div>
    </FilterItemsWrapper>
  );
};

export { Filters };
