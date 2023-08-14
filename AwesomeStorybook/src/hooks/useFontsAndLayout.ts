import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect, useCallback } from 'react';

export function useFontsAndLayout() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    useEffect(() => {
        const loadFonts = async () => {
            await Promise.all([
                Font.loadAsync({
                    Cascadia: require('../../assets/fonts/CascadiaCode-Regular.otf'),
                    CascadiaBold: require('../../assets/fonts/CascadiaCode-Bold.otf'),
                    CascadiaMono: require('../../assets/fonts/CascadiaMono-Regular.ttf'),
                    CascadiaItalic: require('../../assets/fonts/CascadiaCode-Italic.otf'),
                }),
            ]);

            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    return {
        fontsLoaded,
        onLayoutRootView,
    };
}
