import React, { useState } from "react";
import ExpandIconFile from "./icons/expand-icon";
import { ExapndIconType } from "./types";
import "./styles/expandicon.scss";

const ExpandIcon = ({ expanded = false, onExpanded }: ExapndIconType) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
    const onExpand = () => {
        const newStatus = !isExpanded;
        setIsExpanded(newStatus);
        onExpanded(newStatus);
    };
    return (
        <div className="expand-icon" onClick={onExpand}>
            <ExpandIconFile />
        </div>
    );
};

export default ExpandIcon;
