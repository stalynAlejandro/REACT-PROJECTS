import { useState, useEffect, useRef } from "react";

export function useNearScreen({ distance = "100px" }) {
  const [isNearScreen, setIsNearScreen] = useState(false);

  //  ref nos permite guardar valores que entre renderizados se va a manter el valor
  //  ref cambia el valor y no vuelve a renderizar el componente
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const onChange = (entries, observer) => {
      // Recuperamos el primer elemento que estas observando
      // Podriamos observar mas elementos, solo vamos a observar uno
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };

    // De esta manera cargamos el polyfil 'intersection-observer' si el navegador
    // no tiene soporte para Intersection Observer API
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}

// MDN => Intersection Observer API. Permite detectar cuando el elemento esta en el viewport
// nos va a permitir un LazyLoad
// Observer => Recibe dos params: callback y opciones
// Un polyfil es una pequeña biblioteca que da una funcionalidad que le falta a tu navegador.
