import React from "react";
import ExclamationCircle from "./icons/exclamationcircle-icon";
import { loadMessages } from "./languages";
import { NoHierarchyMaskType } from "./types";
import "./styles/no-hierarchy.scss";

const NoHierarchyMask = ({
    noHierarchy = true,
    locale = "en-GB",
}: NoHierarchyMaskType) => {
    if (noHierarchy) {
        return (
            <>
                <div className="no-hierarchy-mask">
                    <div className="no-hierarchy-mask-alert-container">
                        <div className="alert-container">
                            <div className="alert-content">
                                <div className="icon-container">
                                    <ExclamationCircle />
                                </div>
                                <div className="text-container">
                                    {loadMessages(locale)?.TITLE}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return null;
};

export default NoHierarchyMask;
