import { Screens } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import { memo, useMemo, useState } from 'react';
import { Today, Calendar, Goals, Profile } from 'screens';
import {
    Content,
    IOption,
    ISideMenu,
    initOptions,
    TextContainer,
    MenuContainer,
    OptionContainer,
    SideMenuContainer,
} from './styled';

export const SideMenu = memo((props: ISideMenu) => {
    const { options, setOptions } = props;
    const { t } = useTranslation();

    const setSelected = (text: string) => {
        const updatedOptions: IOption[] = options.map(op => ({
            ...op,
            selected: text === op.text,
        }));
        setOptions(updatedOptions);
    };

    return (
        <SideMenuContainer>
            {options?.map((op, index) => (
                <OptionContainer
                    key={index}
                    disabled={op.selected}
                    selected={op.selected}
                    lastOne={op.lastOne}
                    onPress={() => setSelected(op.text)}>
                    <TextContainer selected={op.selected} children={t(op.text)} />
                </OptionContainer>
            ))}
        </SideMenuContainer>
    );
});

export function Menu(props: { onLayoutRootView: () => Promise<void> }) {
    const { onLayoutRootView } = props;
    const [options, setOptions] = useState(initOptions);
    const selected = useMemo(() => options.find(op => op.selected === true)?.text, [options]);

    return (
        <MenuContainer onLayout={onLayoutRootView}>
            <SideMenu options={options} setOptions={setOptions} />
            <Content>
                {selected === Screens.TODAY && <Today />}
                {selected === Screens.GOALS && <Goals />}
                {selected === Screens.PROFILE && <Profile />}
                {selected === Screens.CALENDAR && <Calendar />}
            </Content>
        </MenuContainer>
    );
}
