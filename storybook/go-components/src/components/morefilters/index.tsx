import React, { useState } from "react";
import { MoreFiltersTypes } from "./types";
import { loadMessages } from "./languages";
import AngleUpIcon from "./icons/angleup";
import AngleDownIcon from "./icons/angledown";
import "./styles/morefilters.scss";

const MoreFilters = ({
    locale = "en-GB",
    onShowChildren,
}: MoreFiltersTypes) => {
    const [showChildren, setShowChildren] = useState<boolean>(false);

    const updateStatus = () => {
        const status = !showChildren;
        setShowChildren(status);
        onShowChildren(status);
    };

    return (
        <div className="more-filters">
            <div
                className="more-filters-component more-filters-no-select"
                onClick={updateStatus}
            >
                <div className="more-filter-text">
                    {loadMessages(locale)?.MORE_FILTERS}
                </div>
                <div className="more-filter-icon">
                    {showChildren ? <AngleUpIcon /> : <AngleDownIcon />}
                </div>
            </div>
        </div>
    );
};

export default MoreFilters;
