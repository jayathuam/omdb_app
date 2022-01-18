import axios from "axios";

export default axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: "f9c6e99f",
  },
});
