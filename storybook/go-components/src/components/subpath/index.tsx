import React from "react";
import { SubPathType } from "./types";
import "./styles/subpath.scss";

const SubPath = ({ title }: SubPathType) => {
    return (
        <div className="subpath">
            <div className="subpath-title subpath-no-select">{title}</div>
        </div>
    );
};

export default SubPath;
