import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { FilterContext } from "../contexts/FilterContext";
import { getMovieList } from "../hooks/getMovieList";
import { MovieCard } from "./MovieCard";
import { Loader } from "../shared/components";
import { colors } from "../theme";

const MovieListWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  overflow-y: auto;
  height: calc(100vh - 80px);
`;

const MovieListEmpty = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const MovieListError = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 50px;
  color: ${colors.error};
`;

const ResultText = styled.div`
  color: ${colors.textMain};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  margin: 25px 0px 10px 25px;
`;

const StyledLoader = styled(Loader)`
  margin-top: 25px;
`;

const MovieList = ({ selectedMovie, setSelectedMovie }) => {
  const { filters } = useContext(FilterContext);
  const { min, max } = filters.year;

  const { isLoading, error, data, fetchNextPage, hasNextPage, isFetching } =
    getMovieList({
      page: 1,
      year: `${min}-${max}`,
      type: filters.type,
      search: filters.search,
    });

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <MovieListWrapper onScroll={handleScroll}>
      {!!data?.pages["0"].data.totalResults && (
        <ResultText>{`${data?.pages["0"].data.totalResults} Results (${min}-${max})`}</ResultText>
      )}
      {!isLoading &&
        data?.pages?.map((page) =>
          page?.data?.Search?.map(({ Title, Year, Poster, imdbID }) => (
            <MovieCard
              key={imdbID}
              imageUrl={Poster}
              year={Year}
              title={Title}
              imdbId={imdbID}
              selectedId={selectedMovie}
              onClick={setSelectedMovie}
            />
          ))
        )}
      {!data?.pages["0"].data.totalResults && !isLoading && (
        <MovieListEmpty>
          List is Empty. Please type a valid movie name.
        </MovieListEmpty>
      )}
      {error && <MovieListError>Error Loading Movie List</MovieListError>}
      {(isLoading || isFetching) && <StyledLoader isLoading />}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  selectedMovie: PropTypes.string,
  setSelectedMovie: PropTypes.func,
};

export { MovieList };
