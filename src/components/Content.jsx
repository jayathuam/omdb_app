import React, { useState } from "react";
import styled from "@emotion/styled";

import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import { colors } from "../theme";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  position: fixed;
`;

const List = styled.div`
  border-right: 1px solid ${colors.softText};
  overflow-y: hidden;
  width: 350px;
`;

const Details = styled.div`
  flex-grow: 1;
  margin-top: 25px;
`;

const Content = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  return (
    <Wrapper>
      <List>
        <MovieList
          setSelectedMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
      </List>
      <Details>
        <MovieDetails selectedMovie={selectedMovie} />
      </Details>
    </Wrapper>
  );
};

export { Content };
