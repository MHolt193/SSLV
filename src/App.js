import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Settings from "./Components/Settings";

const App = (props) => {
  const [settingsUp, controlSettings] = useState(false);

  const settingsHandler = () => {
    settingsUp === false ? controlSettings(true) : controlSettings(false);
  };

  return (
    <div className="App">
      {settingsUp === true ? (
        <Settings settingsHandler={settingsHandler} />
      ) : (
        ""
      )}
      <Header settingsHandler={settingsHandler} />
      {props.children}
    </div>
  );
}

export default App;
