import React, { useContext } from "react";
import styled from "@emotion/styled";
import debounce from "lodash.debounce";

import { FilterContext } from "../contexts/FilterContext";
import { LenseIcon } from "../shared/icons";
import { colors, breakpoints } from "../theme";

const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 0;
  width: 300px;
  background: none;
  height: 30px;
  font-size: 24px;
  color: ${colors.secondaryText};
  font-weight: 400;
  border-bottom: 1px solid ${colors.secondaryText};

  &:focus {
    outline: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Search = ({ ...rest }) => {
  const { filters, setFilters } = useContext(FilterContext);
  const handleOnChange = debounce((text) => {
    if (text) {
      setFilters({ ...filters, search: text });
    }
  }, 300);

  return (
    <SearchWrapper {...rest}>
      <LenseIcon color={colors.secondaryText} width={24} height={24} />
      <StyledInput
        placeholder="Search movie here"
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </SearchWrapper>
  );
};

export { Search };
