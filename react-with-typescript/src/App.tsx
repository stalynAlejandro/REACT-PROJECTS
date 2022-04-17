import React, { useEffect, useState } from "react";
import "./App.css";

interface ISub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
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
  const [subs, setSubs] = useState<ISub[]>([]);

  useEffect(() => {
    setSubs(initialState);
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick} <small> {sub.subMonths} </small>{" "}
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
