import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Settings from "./Components/Settings/Settings";
//import TitleInfo from "./Components/TitleInfo/TitleInfo"

const App = (props) => {
  /* Settings */
  const [settingsUp, controlSettings] = useState(false);

  const settingsHandler = () => {
    settingsUp === false ? controlSettings(true) : controlSettings(false);
  };

  /* TitleInfo 
const [titleUp, controlTitleInfo] = useState(false)
const [titleId, getTitleId] = useState(null)

const titleInfoHandler = (event) => {
  titleUp === false ? controlTitleInfo(true) : controlTitleInfo(false);
  getTitleId(event.target.id);
} */

  return (
    <div className="App">
      {settingsUp === true ? (
        <Settings settingsHandler={settingsHandler} />
      ) : (
        // <TitleInfo />
        ""
      )}
      <Header settingsHandler={settingsHandler} />
      {props.children}
    </div>
  );
};

export default App;
