import React from "react";

type BarsIconType = {
    onClicked: () => void;
};

const BarsIcon = ({ onClicked }: BarsIconType) => {
    return (
        <svg
            onClick={onClicked}
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="bars"
            className="svg-inline--fa fa-bars fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
            ></path>
        </svg>
    );
};

export default BarsIcon;
