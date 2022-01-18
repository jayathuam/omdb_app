import { useInfiniteQuery } from "react-query";

import axios from "../utils/axios";

const getMovieList = ({ search, year, type }) => {
  const result = useInfiniteQuery(
    ["movieList", search, year, type],
    async ({ pageParam = 1 }) => {
      if (!search) {
        return { isLoading: false, data: {} };
      }
      return await axios.get("", {
        params: {
          s: search,
          y: year,
          page: pageParam,
          type,
        },
      });
    },
    {
      getNextPageParam: (lastPage, pages) => {
        const numOfResults = Number(lastPage.data.totalResults);
        const numOfPages = Math.ceil(numOfResults / 10);
        const nextPage =
          pages.length + 1 <= numOfPages ? pages.length + 1 : undefined;
        return nextPage;
      },
    }
  );

  const {
    isLoading,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = result;

  return {
    isLoading,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};

export { getMovieList };
