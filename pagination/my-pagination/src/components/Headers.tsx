import React from "react";

interface IHeaders {
  title: string;
  searchable: boolean;
  sortable: boolean;
}

const Headers = ({ title, searchable, sortable }: IHeaders) => {
  return (
    <div>
      <span>{title}</span>
      <span>{searchable ?? "searchable"}</span>
      <span>{sortable ?? "sortable"}</span>
    </div>
  );
};
export default Headers;
