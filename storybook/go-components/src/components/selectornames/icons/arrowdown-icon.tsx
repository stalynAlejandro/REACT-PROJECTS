import React from "react";

type ArrowDownIconType = {
    onUpdate: () => void;
};

const ArrowDownIcon = ({ onUpdate }: ArrowDownIconType) => {
    return (
        <svg
            onClick={onUpdate}
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="chevron-down"
            className="svg-inline--fa fa-chevron-down fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"
            ></path>
        </svg>
    );
};

export default ArrowDownIcon;
