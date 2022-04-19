import React, { useEffect, useRef, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Sub } from "./types";
import { getAllSubs } from "./services/getAllSubs";
import "./App.css";

interface IAppState {
  subs: Sub[];
  newSubs: number;
}

function App() {
  const [subs, setSubs] = useState<IAppState["subs"]>([]);
  const [newSubs, setNewSubs] = useState<IAppState["newSubs"]>(0);
  const divRef = useRef<HTMLDivElement>(null); // Es un hook donde puedes guardar un valor, se va a quedar guardado entre renderizados, pero no va a causar un renderizado

  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubs((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>subs</h1>
      <List subs={subs} />
      New subs: {newSubs}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
