import { useQuery } from "react-query";

import axios from "../utils/axios";

const getMovieDetails = ({ id }) => {
  const { isLoading, error, data } = useQuery(
    ["movieDetails", id],
    async () => {
      if (!id) {
        return { isLoading: false, data: undefined };
      }
      return await axios.get("", {
        params: {
          I: id,
        },
      });
    }
  );

  return {
    isLoading,
    error,
    data: data?.data || undefined,
  };
};

export { getMovieDetails };
