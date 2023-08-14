import { ITime } from '@types';
import { Field } from 'utils/constants';
import {
    Value,
    Title,
    FieldView,
    ButtonText,
    ValueContainer,
    FieldContainer,
    ControlContainer,
    SubButtonContainer,
    AddButtonContainer,
} from './styled';
import { useTranslation } from 'react-i18next';

const addTime = (hours: number, minutes: number, addMinutes: number) => {
    const totalMinutes = hours * 60 + minutes + addMinutes;
    if (totalMinutes < 0) return { hours: 0, minutes: 0 };
    const updatedHours = Math.floor(totalMinutes / 60);
    const updatedMinutes = totalMinutes % 60;
    return { hours: updatedHours, minutes: updatedMinutes };
};

interface IFields {
    editable: boolean;
    fields: { key: string; value: ITime | number }[];
    onChangeField: (key: string, newValue: ITime | number) => void;
}
export function Fields({ fields, editable, onChangeField }: IFields) {
    const { t } = useTranslation();

    const onSubValue = (key: Field) => {
        const value = fields.find(f => f.key === key)?.value;
        if (typeof value === 'number')
            return value === 0 ? null : onChangeField(key, value - 1);

        const newTime = addTime(
            value?.hours as number,
            value?.minutes as number,
            -30
        );
        return onChangeField(key, newTime as ITime);
    };

    const onAddValue = (key: Field) => {
        const value = fields.find(f => f.key === key)?.value;
        if (typeof value === 'number') return onChangeField(key, value + 1);

        const newTime = addTime(
            value?.hours as number,
            value?.minutes as number,
            30
        );
        return onChangeField(key, newTime as ITime);
    };

    return (
        <FieldContainer>
            {fields.map((field, index) => {
                return (
                    <FieldView key={index}>
                        <Title>{t(field.key)}</Title>
                        <ValueContainer>
                            <Value>
                                {typeof field.value === 'number'
                                    ? (field.value as number)
                                    : `${field.value.hours}h:${field.value.minutes.toString()
                                        .length < 2
                                        ? `0${field.value.minutes}`
                                        : field.value.minutes
                                    }m`}
                            </Value>
                            {editable && (
                                <ControlContainer>
                                    <SubButtonContainer
                                        onPress={() =>
                                            onSubValue(field.key as Field)
                                        }
                                        children={<ButtonText children={'-'} />}
                                    />
                                    <AddButtonContainer
                                        onPress={() =>
                                            onAddValue(field.key as Field)
                                        }
                                        children={<ButtonText children={'+'} />}
                                    />
                                </ControlContainer>
                            )}
                        </ValueContainer>
                    </FieldView>
                );
            })}
        </FieldContainer>
    );
}
