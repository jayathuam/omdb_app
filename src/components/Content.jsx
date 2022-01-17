import React from "react";
import styled from "@emotion/styled";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import { colors } from "../theme";
// import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  height: 100%;
`;

const ResultText = styled.div`
  color: ${colors.textMain};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  margin: 25px 0px 10px 25px;
`;

const List = styled.div`
  border-right: 1px solid ${colors.softText};
  overflow-y: auto;
  height: calc(100vh - 80px);
`;

const Details = styled.div`
  flex-grow: 1;
  margin-top: 25px;
`;

const Content = () => {
  return (
    <Wrapper>
      <List>
        <ResultText>582 Results (2001-2004)</ResultText>
        <MovieList />
      </List>
      <Details>
        <MovieDetails />
      </Details>
    </Wrapper>
  );
};

// Content.propTypes = {

// };

export { Content };
