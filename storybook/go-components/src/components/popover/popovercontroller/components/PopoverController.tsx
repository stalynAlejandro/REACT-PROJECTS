import React, {
    useState,
    useLayoutEffect,
    useCallback,
    useRef,
    CSSProperties,
} from "react";
import ReactDOM from "react-dom";
import { getPopoverPosition } from "../utils/popoverPosition";
import { PopoverControllerProps } from "../types";
import "../popover.scss";

const PopoverController = ({
    children,
    fullHeight,
    handleIsOpen,
    offCenter,
    place,
    portalContainer = document.getElementById("another-root"),
    disabled = false,
    autoClose = false,
}: PopoverControllerProps) => {
    const [isOpen, setIsOpen] = useState<boolean | null>(null);
    const [offsetStyle, setOffsetStyle] = useState<CSSProperties | null>(null);
    const [style, setStyle] = useState<CSSProperties>({
        position: "fixed",
        top: 0,
        left: 0,
    });
    const refContainer = useRef<HTMLDivElement>(null);

    const open = () => {
        setIsOpen(!isOpen);
        handleIsOpen && handleIsOpen(!isOpen);
    };

    useLayoutEffect(() => {
        const close = () => {
            setIsOpen(false);
            handleIsOpen && handleIsOpen(false);
        };

        // https://stackoverflow.com/questions/43885599/javascript-event-listener-run-code-after-event-finish-bubbling
        // This function is made to avoid that the close() is called as a consequence of the event bubbling
        const checkIfClickComeFromOutsideAndClose = (ev: Event) => {
            if (
                refContainer &&
                refContainer.current &&
                refContainer.current.contains &&
                !refContainer.current.contains(ev.target as Node)
            ) {
                close();
            }
        };
        if (isOpen && !fullHeight) {
            window.addEventListener(
                "click",
                checkIfClickComeFromOutsideAndClose
            );
        }
        if (autoClose) {
            close();
        }
        return () => {
            window.removeEventListener(
                "click",
                checkIfClickComeFromOutsideAndClose
            );
        };
    }, [isOpen, fullHeight, autoClose, handleIsOpen]);

    const setPosition = useCallback(
        (triggerPosition) => {
            const popoverPosition = getPopoverPosition(
                triggerPosition,
                place,
                offCenter
            );
            setStyle((s) => ({ ...s, ...popoverPosition }));
        },
        [offCenter, place]
    );

    const measuredRef = useCallback(
        (node) => {
            if (node !== null) {
                const targetWidth = node.getBoundingClientRect().width;
                switch (place) {
                    case "top-left":
                    case "bottom-left":
                        setOffsetStyle({
                            ...style,
                            left: (style.left as number) - targetWidth / 2,
                        });
                        break;
                    case "top-right":
                    case "bottom-right":
                        setOffsetStyle({
                            ...style,
                            left: (style.left as number) + targetWidth / 2,
                        });
                        break;
                    default:
                        break;
                }
            }
        },
        [place, style]
    );

    const inputChildren = React.Children.map(children, (child: any) => {
        if (child && child.type && child.type.displayName === "Trigger") {
            return React.cloneElement(child as React.ReactElement<any>, {
                open,
                setPosition,
            });
        } else {
            return (
                !disabled &&
                isOpen &&
                portalContainer &&
                ReactDOM.createPortal(
                    <div
                        className={`popover__wrapper popover__wrapper--${place} ${
                            fullHeight ? "popover__wrapper--full-height" : ""
                        }`}
                        style={offsetStyle ? offsetStyle : style}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        data-testid="popover__wrapper"
                    >
                        <svg
                            className={`popover__arrow popover__arrow--${place}`}
                            width="14"
                            height="7"
                            style={fullHeight ? { top: style.top } : {}}
                        >
                            <polygon points="0,7 7,0, 14,7"></polygon>
                        </svg>
                        <div className="popover__body">
                            {React.cloneElement(
                                child as React.ReactElement<any>,
                                { ref: measuredRef }
                            )}
                        </div>
                    </div>,
                    portalContainer
                )
            );
        }
    });
    return <div ref={refContainer}>{inputChildren}</div>;
};

export default PopoverController;
