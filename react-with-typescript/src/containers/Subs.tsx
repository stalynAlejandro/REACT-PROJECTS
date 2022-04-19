import React, { useEffect, useRef, useState } from "react";
import { getAllSubs } from "../services/getAllSubs";
import { Form, List } from "../components";
import { Sub } from "../types";

interface ISubState {
  subs: Sub[];
  newSubs: number;
}

export function Subs() {
  const [subs, setSubs] = useState<ISubState["subs"]>([]);
  const [newSubs, setNewSubs] = useState<ISubState["newSubs"]>(0);
  const divRef = useRef<HTMLDivElement>(null); // Es un hook donde puedes guardar un valor, se va a quedar guardado entre renderizados, pero no va a causar un renderizado

  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubs((n) => n + 1);
  };

  return (
    <div ref={divRef}>
      <h1>subs</h1>
      <List subs={subs} />
      New subs: {newSubs}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}
