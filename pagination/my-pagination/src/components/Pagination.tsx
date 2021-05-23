import React from "react";

interface IPagination {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: IPagination) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={"pagination"}>
        {pageNumbers.map((number) => (
          <li className={"page-item"}>
            <a className={"page-link"} onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
