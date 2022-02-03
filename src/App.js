import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Settings from "./Components/Settings/Settings";
import SearchResults from "./Components/SearchResults/SearchResults";

const App = (props) => {
  /* Settings */
  const [settingsUp, controlSettings] = useState(false);

  const settingsHandler = () => {
    if (settingsUp === false) {
      controlSettings(true);
    } else if (settingsUp === true) {
      controlSettings(false);
      window.location.reload(true);
    }
  };
  /* Search */
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = () => {
    if (searchActive === false) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    const searchInput = event.target.search;
    setSearchValue(searchInput.value);
  };

  //JSX
  return (
    <div className="App">
      {settingsUp === true ? (
        <Settings settingsHandler={settingsHandler} />
      ) : (
        ""
      )}
      <Header
        searchActive={searchActive}
        searchHandler={searchHandler}
        settingsHandler={settingsHandler}
        searchSubmitHandler={searchSubmitHandler}
      />
      {searchValue.length > 0 ? (
        <SearchResults
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      ) : (
        props.children
      )}
    </div>
  );
};

export default App;
