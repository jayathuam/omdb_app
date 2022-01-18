import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, breakpoints } from "../theme";

const MovieCardWrapper = styled.div`
  width: 300px;
  display: flex;
  gap: 15px;
  padding: 25px;
  align-items: center;
  border-bottom: 1px solid ${colors.softText};
  background-color: ${({ selected }) =>
    selected ? colors.selectedBackground : "unset"};

  @media (max-width: ${breakpoints.tab}) {
    width: 170px;
    padding: 15px;
    gap: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const MovieTitle = styled.div`
  color: ${colors.textMain};
`;

const MovieYear = styled.div`
  padding-top: 5px;
  font-size: 14px;
  color: ${colors.softText};
`;

const MoviePoster = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

const MovieCard = ({ imageUrl, title, year, imdbId, selectedId, onClick }) => {
  return (
    <MovieCardWrapper
      selected={selectedId === imdbId}
      onClick={() => onClick(imdbId)}
    >
      <MoviePoster src={imageUrl} alt={title} />
      <div>
        <MovieTitle>{title}</MovieTitle>
        <MovieYear>{year}</MovieYear>
      </div>
    </MovieCardWrapper>
  );
};

MovieCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  selectedId: PropTypes.string,
  imdbId: PropTypes.string,
  onClick: PropTypes.func,
};

export { MovieCard };
