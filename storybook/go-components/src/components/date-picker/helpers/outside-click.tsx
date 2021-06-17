import React, { useRef, useEffect } from "react";

const useOutsideClick = (ref: any, props: any) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                props.handleClickOutside();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

const OutsideClick = (props: any) => {
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, props);

    return (
        <div className="outside-click__main-container" ref={wrapperRef}>
            {props.children}
        </div>
    );
};

export default OutsideClick;
