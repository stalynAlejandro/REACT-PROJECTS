import React from "react";
import { DefaultContainerTypes } from "./types";
import "./styles/defaultcontainer.scss";

const DefaultContainer = ({ children }: DefaultContainerTypes) => {
    return <div className="default-container">{children}</div>;
};

export default DefaultContainer;
