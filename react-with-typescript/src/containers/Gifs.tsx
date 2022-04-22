import React from "react";
import { Link, Route } from "wouter";
import App from "../App";
import { ListOfGifs } from "../components/ListOfGifs";
import "./Gifs.css";
// Hooks -> funcionalidad para los componentes

export function Gifs() {
  console.log("Gifs");
  return (
    <div className="Gif">
      <Link href="/gif/panda">Gif Panda</Link>
      <Link href="/gif/ecuador">Gif Ecuador</Link>
      <Link href="/gif/rick">Gif Rick</Link>
      <Route component={App} path="/" />
      <Route component={ListOfGifs} path="/gif/:keyword" />
    </div>
  );
}
