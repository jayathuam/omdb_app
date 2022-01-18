import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { getMovieDetails } from "../hooks/getMovieDetails";
import { Loader } from "../shared/components";
import { BookmarkIcon } from "../shared/icons";
import { colors } from "../theme";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 250px;
  border-radius: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 350px;
`;

const SaveButton = styled.button`
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${colors.colorBlack};
  color: ${colors.secondaryMain};
  font-size: 16px;
  background: none;
  cursor: pointer;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
`;

const TitleInfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const InfoContainer = styled.div`
  margin-top: 15px;
  align-items: center;
  color: ${colors.softText};
  line-height: 26px;
`;

const Rating = styled.span`
  border: 1px solid ${colors.colorBlack};
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  color: ${colors.colorBlack};
`;

const Cast = styled.div`
  margin-top: 15px;
  color: ${colors.secondaryMain};
`;

const Plot = styled.div`
  width: 620px;
  margin: 25px auto;
  border-top: 1px solid ${colors.softText};
  color: ${colors.secondaryMain};
  border-bottom: 1px solid ${colors.softText};
  padding: 15px 0;
`;

const OtherInfo = styled.div`
  width: 620px;
  margin: 25px auto;
  display: flex;
  color: ${colors.secondaryMain};
`;

const InfoBox = styled.div`
  flex-basis: 100%;
  text-align: center;
  border-right: 1px solid ${colors.softText};

  :last-child {
    border-right: none;
  }
`;

const RatingName = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

const StyledLoader = styled(Loader)`
  margin-top: 25px;
`;

const MovieListError = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 25px;
  color: ${colors.error};
`;

const MovieDetailsEmpty = styled.div`
  margin-top: 25px;
  text-align: center;
`;

const MovieDetails = ({ selectedMovie }) => {
  const { isLoading, error, data } = getMovieDetails({ id: selectedMovie });
  console.log(isLoading, error, data);
  return (
    <>
      {isLoading && <StyledLoader isLoading />}
      {error && (
        <MovieListError>Error Loading Movie Details....</MovieListError>
      )}
      {!data && !isLoading && !error && (
        <MovieDetailsEmpty>Waiting For Image To Select......</MovieDetailsEmpty>
      )}
      {data && (
        <>
          <ImageContainer>
            <Image src={data.Poster} alt={data.Title} />
            <TitleContainer>
              <SaveButton>
                <BookmarkIcon width={20} height={20} />
                Watchlist
              </SaveButton>
              <TitleInfoContainer>
                <Title>{data.Title}</Title>
                <InfoContainer>
                  <Rating>{data.Rated}</Rating>
                  <span>{`${data.Year}`}</span>
                  <span>{` | ${data.Genre}`}</span>
                  <span>{` | ${data.Runtime}`}</span>
                </InfoContainer>
                <Cast>{data.Actors}</Cast>
              </TitleInfoContainer>
            </TitleContainer>
          </ImageContainer>
          <Plot>{data.Plot}</Plot>
          <OtherInfo>
            {data.Ratings.map((item) => (
              <InfoBox key={item.Source}>
                <div>{item.Value}</div>
                <RatingName>{item.Source}</RatingName>
              </InfoBox>
            ))}
          </OtherInfo>
        </>
      )}
    </>
  );
};

MovieDetails.propTypes = {
  selectedMovie: PropTypes.string,
};

export { MovieDetails };
