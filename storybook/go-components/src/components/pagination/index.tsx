import React, { useState, useEffect, useCallback } from "react";

import DefaultButton from "./DefaultButton";

import { PaginationProps, Page } from "./interfaces/interfaces";
import { loadMessages } from "./languages";

import "./styles/pagination.scss";

const Pagination = ({
    totalItems,
    itemsPerPage,
    page,
    PageButtonComponent = DefaultButton,
    onSelectedPage,
    disabled,
    locale,
    size = "m",
    infinite,
}: PaginationProps) => {
    const [visiblePages, setVisiblePages] = useState<(number | Page)[]>([]);
    const [activePage, setActivePage] = useState<number>(page + 1);

    const pages = Math.ceil(totalItems / itemsPerPage);

    const getVisiblePages = useCallback((activePage: number, pages: number): (
        | number
        | Page
    )[] => {
        if (infinite) {
            return [activePage];
        }

        if (pages && pages < 7) {
            return filterPages([1, 2, 3, 4, 5, 6], pages);
        } else {
            if (
                activePage % 5 >= 0 &&
                activePage > 4 &&
                activePage + 2 < pages
            ) {
                return [
                    1,
                    { label: "...", value: activePage - 2 },
                    activePage - 1,
                    activePage,
                    activePage + 1,
                    { label: "...", value: activePage + 2 },
                    pages,
                ];
            } else if (
                activePage % 5 >= 0 &&
                activePage > 4 &&
                activePage + 2 >= pages
            ) {
                return [
                    1,
                    { label: "...", value: pages - 4 },
                    pages - 3,
                    pages - 2,
                    pages - 1,
                    pages,
                ];
            } else {
                return [1, 2, 3, 4, 5, { label: "...", value: 6 }, pages];
            }
        }
    }, []);

    const changePage = useCallback(
        (newPage: number): void => {
            if (newPage === activePage) {
                return;
            }
            setActivePage(newPage);
            const visiblePages = getVisiblePages(newPage, pages);
            setVisiblePages(filterPages(visiblePages, pages));
            onSelectedPage(newPage - 1);
        },
        [getVisiblePages, onSelectedPage, pages, activePage]
    );

    useEffect(() => {
        setActivePage(page + 1);
    }, [page]);

    useEffect(() => {
        setVisiblePages(getVisiblePages(activePage ? activePage : 0, pages));
    }, [pages, getVisiblePages, activePage]);

    const filterPages = (
        visiblePages: (number | Page)[],
        totalPages: number
    ) => {
        return visiblePages.filter(
            (page: number | Page): boolean => page <= totalPages
        );
    };

    return (
        <div className="table__pagination">
            <div className="table__prevPageWrapper">
                <PageButtonComponent
                    className={`table__pageButton ${size} ${
                        disabled && !infinite ? "disabled" : ""
                    }`}
                    onClick={() => {
                        if (
                            ((activePage === 1 || disabled) && !infinite) ||
                            activePage <= 1
                        )
                            return;
                        changePage(activePage - 1);
                    }}
                    disabled={activePage === 1 && !infinite}
                >
                    {loadMessages(locale)?.BACK}
                </PageButtonComponent>
            </div>
            <div className="table__visiblePagesWrapper">
                {visiblePages.map(
                    (page: Page | number): React.ReactNode => {
                        return (
                            <PageButtonComponent
                                key={
                                    typeof page === "object" ? page.value : page
                                }
                                className={
                                    activePage === page
                                        ? `table__pageButton table__pageButton--active ${size} ${
                                              disabled ? "disabled" : ""
                                          }`
                                        : `table__pageButton ${size} ${
                                              disabled ? "disabled" : ""
                                          }`
                                }
                                onClick={() => {
                                    if (!disabled) {
                                        if (typeof page === "object") {
                                            changePage(page.value);
                                        } else {
                                            changePage(page);
                                        }
                                    }
                                }}
                            >
                                {typeof page === "object" ? page.label : page}
                            </PageButtonComponent>
                        );
                    }
                )}
            </div>
            <div className="table__nextPageWrapper">
                <PageButtonComponent
                    className={`table__pageButton ${size} ${
                        disabled && !infinite ? "disabled" : ""
                    }`}
                    onClick={() => {
                        if ((activePage === pages || disabled) && !infinite)
                            return;
                        changePage(activePage + 1);
                    }}
                    disabled={activePage === pages && !infinite}
                >
                    {loadMessages(locale)?.NEXT}
                </PageButtonComponent>
            </div>
        </div>
    );
};

export default Pagination;
