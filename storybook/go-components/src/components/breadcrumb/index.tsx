import React from "react";
import { BreadCrumbType } from "./types";
import "./styles/breadcrumb.scss";

const Breadcrumb = ({ breadcumbs }: BreadCrumbType) => {
    return (
        <React.Fragment>
            {Array.isArray(breadcumbs) &&
                breadcumbs.map((breadcumb: string, index: number) => {
                    const total = breadcumbs.length;
                    switch (index) {
                        case 0: {
                            return (
                                <React.Fragment key={`${index}-${breadcumb}`}>
                                    <li key={index} className="breadcrumb-item">
                                        <a
                                            href="/"
                                            className={`${
                                                total === 1
                                                    ? "default"
                                                    : "normal"
                                            }`}
                                            data-testid="breadcrumb-title"
                                        >
                                            {breadcumb}
                                        </a>
                                    </li>
                                    {breadcumbs.length > 1 && (
                                        <li
                                            className="breadcrumb-item"
                                            data-testid="breadcrumb-first-slash"
                                        >
                                            <span
                                                className={`${
                                                    total > 2
                                                        ? "first-gray-slash"
                                                        : "first-slash"
                                                }`}
                                            >
                                                /
                                            </span>
                                        </li>
                                    )}
                                </React.Fragment>
                            );
                        }
                        case breadcumbs.length - 1: {
                            return (
                                <li
                                    key={`${index}-${breadcumb}`}
                                    className="breadcrumb-item breadcrumb-item--active"
                                >
                                    <span data-testid="breadcrumb-last-title">
                                        {breadcumb}
                                    </span>
                                </li>
                            );
                        }
                        default: {
                            return (
                                <React.Fragment key={`${index}-${breadcumb}`}>
                                    <li className="breadcrumb-item breadcrumb-item">
                                        <span
                                            className="normal"
                                            data-testid="breadcrumb-middle-title"
                                        >
                                            {breadcumb}
                                        </span>
                                    </li>
                                    <li
                                        className="breadcrumb-item"
                                        data-testid="breadcrumb-middle-slash"
                                    >
                                        <span className="middle-slash">/</span>
                                    </li>
                                </React.Fragment>
                            );
                        }
                    }
                })}
        </React.Fragment>
    );
};

export default Breadcrumb;
