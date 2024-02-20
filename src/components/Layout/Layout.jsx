import { ThemeProvider } from "styled-components";
import { useGlobal } from "../../hooks/useGlobal";

const mainColorLight = '#20202C';
const mainColorDark = '#FFFFFF';

const Layout = ({ children }) => {

    const currentTheme = useGlobal();

    const lightTheme = {
        color: mainColorLight,
        backgroundColor: "#EAEEF6",
        _orange: {
            background: "#ffe4c2",
            color: "#ff6d00",
        },
        _green: {
            background: "#b4fdd1",
            color: "#06B16E",
        },
        _purple: {
            background: "#e9d4ff",
            color: "#9A48F1",
        },
        subttl: "#000",
        h03back: "#33399b",
        exitBack: "rgba(0, 0, 0, 0.4)",
        backColor: "#ffffff",
        backColor2: "#ffffff",
        border: "0.7px solid #d4dbe5",
        label: "#fff",
        input: "#94a6be",
        btn: "#565EEF",
        border2: " 1.9px solid #565eef",
    };

    const darkTheme = {
        color: mainColorDark,
        backgroundColor: "#151419",
        _orange: {
            background: "#ff6d00",
            color: "#ffe4c2",
        },
        _green: {
            background: "#06B16E",
            color: "#b4fdd1",
        },
        _purple: {
            background: "#9A48F1",
            color: "#e9d4ff",
        },
        subttl: "#fff",
        h03back: " #565EEF",
        exitBack: "rgba(0, 0, 0, 0.8)",
        backColor: " #20202C",
        backColor2: " #202229",
        border: "0.7px solid #4E5566",
        label: "#d4dbe5",
        input: "#565EEF",
        btn: "#FFFFFF",
        border2: " 1.9px solid #FFFFFF",
    };

    let theme;
    switch (currentTheme.theme) {
        case "dark":
            theme = darkTheme;
            break;
        case "light":
            theme = lightTheme;
            break;
        default:
            theme = lightTheme;
    }

    return (
        <ThemeProvider theme={theme}>
            <>{children}</>
        </ThemeProvider>
    );
};

export default Layout;