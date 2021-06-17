import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "../src/components/date-picker";
const THEMES = {
    DARK: "dark",
    LIGHT: "light",
};

const App = () => {
    const [theme] = useState<string>(THEMES.DARK);
    useEffect(() => {
        document.body.className = "";
        document.body.classList.add(theme);
    }, []);

    const languages: Array<string> = ["en-GB", "en-US", "es-ES", "ca-ES"];

    return <DatePicker locale={"de-DE"} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
