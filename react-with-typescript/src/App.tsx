import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Sub, SubsResponseFromApi } from "./types";

interface IAppState {
  subs: Sub[];
  newSubs: number;
}

function App() {
  const [subs, setSubs] = useState<IAppState["subs"]>([]);
  const [newSubs, setNewSubs] = useState<IAppState["newSubs"]>(0);
  const divRef = useRef<HTMLDivElement>(null); // Es un hook donde puedes guardar un valor, se va a quedar guardado entre renderizados, pero no va a causar un renderizado

  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return axios
        .get<SubsResponseFromApi>("http://localhost:3001/subs")
        .then((response) => response.data);
    };

    const mapFromApi = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.map((subFromApi) => {
        return {
          nick: subFromApi.nick,
          avatar: subFromApi.profileUrl,
          subMonths: subFromApi.months,
          description: subFromApi.description,
        };
      });
    };

    fetchSubs().then(mapFromApi).then(setSubs);
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
