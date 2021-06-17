import React, { useEffect, useState } from "react";
import { CheckBoxType, ItemType } from "./types";
import "./styles/checkbox.scss";

const Checkbox = ({ item, onChangeItem }: CheckBoxType) => {
    const checked: boolean = item?.selected ? true : false;
    const [isChecked, setIsChecked] = useState<boolean>(checked);
    const updateStatus = () => {
        const status = !isChecked;
        setIsChecked(status);
        const clonedItem: ItemType = Object.assign({}, item, {
            selected: status,
        });
        onChangeItem(clonedItem);
    };

    useEffect(() => {
        if (item && item.selected !== undefined) {
            setIsChecked(item.selected);
        }
    }, [item, item.selected]);

    return (
        <label className="checkbox-container">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={updateStatus}
            />
            <span className="checkmark"></span>
        </label>
    );
};

export default Checkbox;
