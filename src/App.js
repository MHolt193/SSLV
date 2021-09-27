import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Settings from "./Components/Settings";

function App() {
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
    </div>
  );
}

export default App;
