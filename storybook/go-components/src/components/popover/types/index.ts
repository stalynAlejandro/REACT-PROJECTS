import { placesInterface } from "../popovercontroller/types";

export type PopoverTypes = {
    place: placesInterface;
    offCenter?: boolean;
    iconComponent: React.ReactNode;
    triggerClass: string;
    children: React.ReactNode;
    autoClose?: boolean;
};
