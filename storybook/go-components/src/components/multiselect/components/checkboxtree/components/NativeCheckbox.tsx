import React, { useEffect, useCallback, useRef } from "react";

const NativeCheckbox = ({ indeterminate, ...rest }: any) => {
    const checkboxRef = useRef<HTMLInputElement | null>(null);

    const updateDeterminateProperty = useCallback(() => {
        if (checkboxRef?.current?.indeterminate)
            checkboxRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    useEffect(() => {
        updateDeterminateProperty();
    }, [updateDeterminateProperty]);

    return <input {...rest} ref={checkboxRef} type="checkbox" />;
};

export default NativeCheckbox;
