import React from "react";
import { RouteComponentProps } from "wouter";
import { Loading } from "./Loading";
import { ListOfGifs } from "./ListOfGifs";
import useGifs from "../hooks/useGifs";

interface Props extends RouteComponentProps<{ keyword: string }> {}

export const SearchResults = (props: Props) => {
  const { keyword } = props.params;
  const { loading, gifs } = useGifs({ keyword: keyword });

  console.log("-", keyword);

  return (
    <React.Fragment>
      {loading ? <Loading /> : <ListOfGifs gifs={gifs} />}
    </React.Fragment>
  );
};

export default React.memo(
  SearchResults,
  (prevProps, nextProps) =>
    prevProps.params.keyword === nextProps.params.keyword
);
// export default SearchResults;

/**
 *  React Memo.
 *  Por defecto mira los parametros que le llegan por props para ver si
 *  se tiene que volver a renderizar, pero no mira lo de dentro.
 *
 *  Tiene en cuenta => props. para ver si han cambiado
 *  Cuando el segundo de React.Memo parametro sea true => no se va a volver renderizar. Es el mismo componente
 */
