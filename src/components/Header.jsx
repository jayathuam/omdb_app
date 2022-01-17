import React from "react";
import styled from "@emotion/styled";
import { Search } from "./Search";
import { Filters } from "./Filters";
import { colors } from "../theme";

const Wrapper = styled.div`
  background-color: ${colors.secondaryMain};
  color: ${colors.secondaryText};
  position: sticky;
  top: 0;
  height: 80px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledSearch = styled(Search)`
  flex-grow: 1;
`;

const Header = () => {
  return (
    <Wrapper>
      <StyledSearch />
      <Filters />
    </Wrapper>
  );
};

export { Header };
