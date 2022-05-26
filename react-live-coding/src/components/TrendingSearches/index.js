import React, { Suspense } from "react";
import { useNearScreen } from "hooks/useNearScreen";
import { Spinner } from "components/Spinner";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));
// Le pasamos una funcion que devuelva el import dinamico del componente que queremos utilizar
// Este import() es dinamico y asincrono.

export function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "50px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  );
}

// Tener un estado dentro que determine si tiene que mostrar
// la sección de Tendring
// export function LazyTrending() {
//   const [show, setShow] = useState(false);

// Como si fuera un baul
// Nos permite guardar valores que entre renderizados se va a mantener el valor
// El state cuando cambia el valor vuelve a renderizar el componente
// El ref cambia el valor y no vuelve a renderizar el componente
// const elementRef = useRef();

// useEffect(() => {
// let observer;

// Tenemos aquí la función que se va a ejecutar
// Las entries - entradas que hay dentro que estamos observando
// segundo parametro el propio observer
// const onChange = (entries, observer) => {
//   const el = entries[0]; // Recuperamos el primer elemento que estamos observando, solo estamos observando un elemento.
//   console.log({ el });
//   console.log(el.isIntersecting);
//   if (el.isIntersecting) {
//     setShow(true);
//     // Tenemos que desconectarnos
//     observer.disconnect();
//   }
// };

// De esta manera es compatible con navegadores que si tienen soporte a IntersectionObserver
// y a los navegadores (IE11) que no tienen soporte se importa el polyfil
// Promise.resolve(
//   typeof IntersectionObserver !== "undefined"
//     ? IntersectionObserver
//     : import("intersection-observer")
// ).then(() => {
//   observer = new IntersectionObserver(onChange, {
//     rootMargin: "100px",
//   });

//   observer.observe(elementRef.current);
// });

// Este efecto va a utilizar el *intersection observer*
// MDN => Intersection Observer API
// Permite detectar cuando elemento esta en el viewport, nos va a permitir un LazyLoad
// que se cargue solo si lo estamos viendo
// Oberver => Recibe dos param: callback que se ejecutara cuando haya una actualización sobre lo que está observando.
// y un objeto de opciones

// rootMargin cuando haya una distancia de 100px ya dirá que el elemento esta haciendo intersección con el viewport, cargará antes de que aparezca.
// const observer = new IntersectionObserver(onChange, {
//   rootMargin: "100px",
// });

// observer.observe(document.getElementById("LazyTrending"));
// observer.observe(elementRef.current);

//   return () => observer.disconnect(); // Cuando este componente se deje de utilizar también se desconecte
// }, []);

// return <div id="LazyTrending">{show ? <TrendingSearches /> : null}</div>;
//   return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
// }

// Un polifil es una pequeña biblioteca que da una funcionalidad que le falta a tu navegador.
// "No tienes soporte, pero yo te voy a proveer de este soporte"
