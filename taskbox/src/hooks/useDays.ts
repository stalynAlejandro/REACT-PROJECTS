import { IToday } from '@types';
import { Field, Screens } from 'utils/constants';
import { useEffect, useState } from 'react';
import { readData } from 'store/async';

export function useDays(): [IToday[], (day: IToday[]) => void] {
    const today: IToday = {
        date: new Date().toString(),
        fields: [
            { key: Field.TIME, value: { hours: 0, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 0 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    };

    const [days, setDays] = useState<IToday[]>([today]);

    useEffect(() => {
        const fn = async () => {
            const prevDays: IToday[] = (await readData(
                Screens.TODAY
            )) as IToday[];
            if (prevDays) {
                if (
                    new Date(today.date).getDate() ===
                    new Date(prevDays[0].date).getDate()
                ) {
                    setDays(prevDays);
                } else {
                    setDays([today, ...prevDays]);
                }
            }
        };
        fn();
    }, []);

    return [days, setDays];
}
