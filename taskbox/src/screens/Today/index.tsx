import { useDays } from 'hooks/useDays';
import { Screens } from 'utils/constants';
import { debounce } from 'lodash';
import { FlatList } from 'react-native';
import { storeData } from 'store/async';
import { useCallback } from 'react';
import { windowHeight } from 'utils/scaleFunctions';
import { ITime, IToday } from '@types';
import { ContentContainer, TodayContainer } from './styled';
import { Comment, Fields, Header, ImagePicker } from 'components';

const parseDateStringToDate = (dateString: string) => {
    const cleanedDateString = dateString.replace(/GMT.*$/, '');
    const date = new Date(cleanedDateString);
    return date;
};

interface IContent {
    day: IToday;
    editable: boolean;
    onChangeImage: (date: Date, image: string) => void;
    onChangeComment: (date: Date, text: string) => void;
    onChangeField: (date: Date, key: string, value: ITime | number) => void;
}

export const Content = (props: IContent) => {
    const { day, editable, onChangeComment, onChangeField, onChangeImage } =
        props;
    const { date, fields, comment, image } = day;
    const dateObject =
        date instanceof Date ? date : parseDateStringToDate(date);


    return (
        <ContentContainer editable={editable}>
            {editable && <Header date={dateObject} />}
            <Fields
                fields={fields}
                onChangeField={(key: string, value: ITime | number) =>
                    editable && onChangeField(dateObject as Date, key, value)
                }
                editable={editable}
            />
            <Comment
                comment={comment}
                onChangeComment={(text: string) =>
                    onChangeComment(dateObject as Date, text)
                }
                editable={editable}
            />
            <ImagePicker
                image={image}
                onChangeImage={(image: string) =>
                    onChangeImage(dateObject as Date, image)
                }
                editable={editable}
            />
        </ContentContainer>
    );
};

const ListDays = () => {
    const [days, setDays] = useDays();

    const saveDataAsync = useCallback(
        debounce((d: IToday[]) => {
            storeData(Screens.TODAY, JSON.stringify(d));
        }, 500),
        []
    );

    const onChangeImage = (date: Date, image: string): void => {
        const updateDay = days.map((d: IToday) => {
            const ddate = parseDateStringToDate(d.date as string);
            return ddate && date && ddate.valueOf() === date.valueOf()
                ? {
                    ...d,
                    image: image,
                }
                : d;
        });
        setDays(updateDay);
        saveDataAsync(updateDay);
    };

    const onChangeComment = (date: Date, text: string) => {
        const updateDay = days.map((d: IToday) => {
            const ddate = parseDateStringToDate(d.date as string);
            return ddate && date && ddate.valueOf() === date.valueOf()
                ? {
                    ...d,
                    comment: text,
                }
                : d;
        });
        setDays(updateDay);
        saveDataAsync(updateDay);
    };

    const onChangeField = (date: Date, key: string, value: ITime | number) => {
        const updateDay = days.map((d: IToday) => {
            const ddate = parseDateStringToDate(d.date as string);
            return ddate && date && ddate.valueOf() === date.valueOf()
                ? {
                    ...d,
                    fields: d.fields.map(
                        (f: { key: string; value: number | ITime }) => {
                            return f.key === key
                                ? { key: f.key, value: value }
                                : f;
                        }
                    ),
                }
                : d;
        });
        setDays(updateDay);
        saveDataAsync(updateDay);
    };

    return (
        <FlatList
            pagingEnabled
            data={days}
            renderItem={({ item, index }) => {
                return (
                    <Content
                        key={index}
                        day={item}
                        onChangeImage={onChangeImage}
                        onChangeComment={onChangeComment}
                        onChangeField={onChangeField}
                        editable={true}
                    />
                );
            }}
            onScroll={(e: any) => {
                const index = Math.round(
                    e.nativeEvent.contentOffset.y / windowHeight
                );
                if (days.length - 3 < index) {
                }
            }}
        />
    );
};

export function Today() {
    return <TodayContainer children={<ListDays />} />;
}
