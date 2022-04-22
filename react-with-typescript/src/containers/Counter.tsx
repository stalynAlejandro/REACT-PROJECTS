import React, { useCallback, useEffect, useState } from "react";
import "./Gifs.css";

/**
 * No es bueno usar useMemo y useCallback siempre.
 * useMemo y useCallback lo que hace te guarda, memoriza la función
 *
 * Aclarar que el useMemo y el useCallback pueden ayudar al rendimiento cuando
 * haces operaciones pesadas.
 *
 * Utliza un useCallback cuando te quieras asegurar que la función que estás utilizando
 * no quieres que cambie la función dentro del callback
 */

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("fetch()");
  }, [counter]);

  const increment = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);

  return (
    <div className="Gif">
      <div>{counter}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};
