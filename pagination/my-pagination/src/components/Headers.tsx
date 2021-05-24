import React from "react";
import "./Header.scss";

interface ICustomHeader {
  title: string;
  sortable: boolean;
  searchable: boolean;
}

const CustomHeader = ({ title, sortable, searchable }: ICustomHeader) => {
  return (
    <div>
      
    </div>
  );
};

const Headers = () => {
  return (
    <div className={"headers-container"}>
      <div />
    </div>
  );
};
export default Headers;
