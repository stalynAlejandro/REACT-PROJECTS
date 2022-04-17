import React from "react";
import { Sub } from "../types";

interface Props {
  // children: JSX.Element | React.ReactNode | (name: string) => React.ReactNode // Se puede tipar para aceptar el tipo de children que queremos
  subs: Array<Sub>;
}

// const List: React.FC<Props> = ({subs}) => {    // Esto acepta todo tipo de childrens
const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub) => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
          <h4>
            {sub.nick} <small> {sub.subMonths} </small>{" "}
          </h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export { List };
