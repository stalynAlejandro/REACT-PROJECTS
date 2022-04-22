import React from "react";
import { RouteComponentProps } from "wouter";
import { Loading } from "./Loading";
import { ListOfGifs } from "./ListOfGifs";
import useGifs from "../hooks/useGifs";

interface Props extends RouteComponentProps<{ keyword: string }> {}

export const SearchResults = (props: Props) => {
  const { keyword } = props.params;
  const { loading, gifs } = useGifs({ keyword: keyword });

  return (
    <React.Fragment>
      {loading ? <Loading /> : <ListOfGifs gifs={gifs} />}
    </React.Fragment>
  );
};
