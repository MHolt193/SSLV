//Imports
import React, { useState, useCallback, useEffect } from "react";
import apiKey from "../../key";
import TitleInfo from "../TitleInfo/TitleInfo";
import services from "../Settings/services";

//component function
const SearchResults = (props) => {
  const [watchModeApiResponse, setWatchModeApiResults] = useState([]);
  const [watchModeApiRetrieved, setWatchModeApiRetrieved] = useState(false);

  const setResults = props.setSearchResults;

  const callApi = useCallback(async () => {
    const myServices = services.map((service) =>
      localStorage.getItem(service.id) === "true" ? service.id + "," : ""
    );
    const response = await fetch(
      `https://api.watchmode.com/v1/search/?apiKey=${apiKey}&search_field=name&search_value=${props.searchValue}`
    );
    const data = await response.json();
    setWatchModeApiResults(data);
    setResults(data);
    setWatchModeApiRetrieved(true);
    console.log(data);
  }, [props.searchValue, setResults]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return <div></div>;
};
export default SearchResults;
