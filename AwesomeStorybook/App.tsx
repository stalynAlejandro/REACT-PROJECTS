import './i18n';
import { Menu } from 'navigation/Menu';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { useAppState } from 'hooks/useAppState';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import { useFontsAndLayout } from 'hooks/useFontsAndLayout';
import { darkTheme, lightTheme } from 'themes';
import * as SplashScreen from 'expo-splash-screen';
import Constants from 'expo-constants';

function App() {
  const store = useAppState();
  const isDarkMode = useColorScheme() === 'dark';
  const { fontsLoaded, onLayoutRootView } = useFontsAndLayout();

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Menu onLayoutRootView={onLayoutRootView} />
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      </ThemeProvider>
    </Provider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
} else {
  SplashScreen.preventAutoHideAsync();
}

export default AppEntryPoint;
