import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Sub } from "./types";

interface IAppState {
  subs: Sub[];
  newSubs: number;
}

const initialState = [
  {
    nick: "dapelu",
    subMonths: 5,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "aveces hace de moderador",
  },
  {
    nick: "sergio",
    subMonths: 4,
    avatar: "https://i.pravatar.cc/150?u=sergio",
  },
];

function App() {
  const [subs, setSubs] = useState<IAppState["subs"]>([]);
  const [newSubs, setNewSubs] = useState<IAppState["newSubs"]>(0);
  const divRef = useRef<HTMLDivElement>(null); // Es un hook donde puedes guardar un valor, se va a quedar guardado entre renderizados, pero no va a causar un renderizado

  useEffect(() => {
    setSubs(initialState);
    return () => {};
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
