import React from "react";
// import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { BookmarkIcon } from "../shared/icons";
import { colors } from "../theme";

const movie = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  Rated: "PG-13",
  Released: "25 Mar 2016",
  Runtime: "152 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Zack Snyder",
  Writer: "Chris Terrio, David S. Goyer, Bob Kane",
  Actors: "Ben Affleck, Henry Cavill, Amy Adams",
  Plot: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
  Language: "English",
  Country: "United States",
  Awards: "14 wins & 33 nominations",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "6.4/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "29%",
    },
    {
      Source: "Metacritic",
      Value: "44/100",
    },
  ],
  Metascore: "44",
  imdbRating: "6.4",
  imdbVotes: "670,863",
  imdbID: "tt2975590",
  Type: "movie",
  DVD: "19 Jul 2016",
  BoxOffice: "$330,360,194",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

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

const MovieDetails = () => {
  return (
    <>
      <ImageContainer>
        <Image src={movie.Poster} alt={movie.Title} />
        <TitleContainer>
          <SaveButton>
            <BookmarkIcon width={20} height={20} />
            Watchlist
          </SaveButton>
          <TitleInfoContainer>
            <Title>{movie.Title}</Title>
            <InfoContainer>
              <Rating>{movie.Rated}</Rating>
              <span>{`${movie.Year}`}</span>
              <span>{` | ${movie.Genre}`}</span>
              <span>{` | ${movie.Runtime}`}</span>
            </InfoContainer>
            <Cast>{movie.Actors}</Cast>
          </TitleInfoContainer>
        </TitleContainer>
      </ImageContainer>
      <Plot>{movie.Plot}</Plot>
      <OtherInfo>
        {movie.Ratings.map((item) => (
          <InfoBox key={item.Source}>
            <div>{item.Value}</div>
            <RatingName>{item.Source}</RatingName>
          </InfoBox>
        ))}
      </OtherInfo>
    </>
  );
};

// MovieDetails.propTypes = {};

export { MovieDetails };
