import { useRef, useEffect } from "react";

export const usePrevious = (value: any) => {
    const ref = useRef<any>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};
