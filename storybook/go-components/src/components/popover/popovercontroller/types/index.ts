export type placesInterface =
    | "top-left"
    | "top"
    | "top-right"
    | "right-top"
    | "right"
    | "right-bottom"
    | "bottom-right"
    | "bottom"
    | "bottom-left"
    | "left-bottom"
    | "left"
    | "left-top";

export type PopoverControllerProps = {
    children?: React.ReactNode | React.ReactNode[];
    fullHeight?: boolean;
    handleIsOpen?: (isOpen: boolean) => void;
    offCenter?: boolean;
    place: placesInterface;
    portalContainer?: HTMLElement | null;
    disabled?: boolean;
    autoClose?: boolean;
};

export type PopoverTriggerProps = {
    children: React.ReactNode | React.ReactNode[];
    open?: () => void;
    setPosition?: (position: ClientRect) => void;
};
