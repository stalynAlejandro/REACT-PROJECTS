import React from "react";
import { Link } from "wouter";

export function Gifs() {
  return (
    <div className="Gifs">
      <section className="Gifs-content">
        <Link to="/">
          <img
            className="App-logo"
            alt="Giffy Logo"
            src=" https://lh3.googleusercontent.com/a-/AOh14GgYVR-YAHPnQKkwqihq3pVjdiflmPZk6gt7YdZ2vg"
          />
        </Link>
      </section>
    </div>
  );
}
