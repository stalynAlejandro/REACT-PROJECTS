import React from "react";

interface ICustomHeader {
  title: string;
  sortable: boolean;
  searchable: boolean;
  content: string;
}

const CustomHeader = ({
  title,
  sortable,
  searchable,
  content,
}: ICustomHeader) => {
  return (
    <div>
      <span>{title}</span>
      <span>{sortable ?? "sortable"}</span>
      <span>{searchable ?? "searchable"}</span>
      <span>{content}</span>
    </div>
  );
};

const Headers = () => {
  return (
    <div>
      <CustomHeader
        title={"ID"}
        sortable={true}
        searchable={true}
        content={"12345"}
      />
    </div>
  );
};
export default Headers;
