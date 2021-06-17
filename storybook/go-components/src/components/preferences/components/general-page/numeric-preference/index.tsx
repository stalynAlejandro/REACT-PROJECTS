import React, { useEffect, useState } from "react";
import SelectorNames from "../../../../selectornames";
import RadioButton from "../../../../radiobutton";
import { RegionPreferenceType } from "./types";
import { loadMessages } from "./languages";
import { DataType } from "../../../types";
import { restoreSeparatorWithItemActive, updateRadio } from "./functions";

const NumericPreference = ({
    locale = "en-GB",
    decimalItems,
    thousandItems,
    onChangeThousand,
    onChangeDecimal,
}: RegionPreferenceType) => {
    const [radioA, setRadioA] = useState<DataType | null>(null);
    const [radioB, setRadioB] = useState<DataType | null>(null);
    const [thousandItem, setThousandItem] = useState<DataType | null>(null);
    const [thousands, setThousands] = useState<DataType[]>(thousandItems);

    const updateThousandSeparator = (thousand: any) => {
        if (thousand.value === radioA?.value) {
            const updatedA = updateRadio(radioA, false);
            const updatedB = updateRadio(radioB, true);
            setRadioA(updatedA);
            setRadioB(updatedB);
            onChangeDecimal(updatedB);
        } else if (thousand.value === radioB?.value) {
            const updatedA = updateRadio(radioA, true);
            const updatedB = updateRadio(radioB, false);
            setRadioA(updatedA);
            setRadioB(updatedB);
            onChangeDecimal(updatedA);
        }
        setThousandItem(thousand);
        onChangeThousand(thousand);
    };

    const updateRadioButton = (item: DataType) => {
        let noSelected: DataType | null = null;
        /* Update radios */
        if (item.id === radioA?.id) {
            const updatedA = updateRadio(radioA, true);
            const updatedB = updateRadio(radioB, false);
            noSelected = updatedB;
            setRadioA(updatedA);
            setRadioB(updatedB);
            onChangeDecimal(updatedA);
        } else if (item.id === radioB?.id) {
            const updatedA = updateRadio(radioA, false);
            const updatedB = updateRadio(radioB, true);
            noSelected = updatedA;
            setRadioA(updatedA);
            setRadioB(updatedB);
            onChangeDecimal(updatedB);
        }
        /* Update list */
        if (item.value === thousandItem?.value) {
            const items = restoreSeparatorWithItemActive(thousands, noSelected);
            const activeItem = items.find((i: DataType) => i.selected);
            if (!activeItem) return;
            setThousands(items);
            setThousandItem(activeItem);
            onChangeThousand(activeItem);
        }
    };

    useEffect(() => {
        if (decimalItems.length === 2) {
            const itemA: DataType = decimalItems[0];
            const itemB: DataType = decimalItems[1];
            setRadioA(itemA);
            setRadioB(itemB);
        }
    }, []);

    useEffect(() => {
        const active: DataType | undefined = thousandItems.find(
            (t: DataType) => t.selected
        );
        if (!active) return;
        setThousandItem(active);
    }, []);

    return (
        <div className="default-preference">
            <SelectorNames
                items={thousands}
                locale={locale}
                search={false}
                showActive={true}
                label={loadMessages(locale).THOUSAND_SEPARATOR}
                size={"s"}
                css={"thousand-pref"}
                onChangeItems={updateThousandSeparator}
            />
            <div className="separator"></div>
            <div className="decimal-separator">
                <div className="title">
                    {`${loadMessages(locale).DECIMAL_SEPARATOR}:`}
                </div>
                <div className="radio-buttons">
                    <RadioButton
                        item={radioA}
                        title={radioA?.description}
                        checked={radioA?.selected}
                        size={"m"}
                        showTitle={true}
                        css={"first-radio"}
                        onChange={(item: any) => updateRadioButton(item)}
                    />
                    <RadioButton
                        size={"m"}
                        item={radioB}
                        title={radioB?.description}
                        checked={radioB?.selected}
                        showTitle={true}
                        css={"second-radio"}
                        onChange={(item: any) => updateRadioButton(item)}
                    />
                </div>
            </div>
        </div>
    );
};

export default NumericPreference;
