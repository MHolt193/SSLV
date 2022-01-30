import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
  /* Settings */
  const [settingsUp, controlSettings] = useState(false);

  const settingsHandler = () => {
    if(settingsUp === false){
      controlSettings(true)
    }else if(settingsUp === true){
      controlSettings(false);
      window.location.reload(true)
    }
  };
  /* Search */
  const [searchActive, setSearchActive] = useState(false);

  const searchHandler = () =>{
    if (searchActive === false){
      setSearchActive(true);
    }else{
      setSearchActive(false);
    }
  }


  return (
    <div className="App">
      {settingsUp === true ? (
        <Settings settingsHandler={settingsHandler} />
      ) : (
        ""
      )}
      <Header searchActive={searchActive} searchHandler={searchHandler} settingsHandler={settingsHandler} />
      {props.children}
    </div>
  );
};

export default App;
