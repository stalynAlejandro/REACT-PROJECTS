import React, { useState } from "react";
import { Subs, Gifs, Counter } from "./containers";
import "./App.css";

enum PET_APPS {
  Subs = "subs",
  Gifs = "gifs",
  Counter = "counter",
}

function App() {
  const [currentApp, setCurrentApp] = useState(PET_APPS.Subs);

  const handleChangeApp = (targetApp: PET_APPS) => {
    setCurrentApp(targetApp);
  };

  return (
    <div className="App">
      <div>
        <strong>Chosse app</strong>
        <button onClick={() => handleChangeApp(PET_APPS.Subs)}>Subs</button>
        <button onClick={() => handleChangeApp(PET_APPS.Gifs)}>Gifs</button>
        <button onClick={() => handleChangeApp(PET_APPS.Counter)}>
          Counter
        </button>
      </div>

      {currentApp === PET_APPS.Subs && <Subs />}
      {currentApp === PET_APPS.Gifs && <Gifs />}
      {currentApp === PET_APPS.Counter && <Counter />}
    </div>
  );
}

export default App;
