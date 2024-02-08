import { ThemeProvider } from "styled-components";
import { useGlobal } from "../../hooks/useGlobal";

const mainColorLight = '#FFFFFF';
const mainColorDark = '#20202C';

const Layout = ({ children }) => {
    const darkTheme = {
        color: "#FFFFFF",
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

        //  def
        body: '#151419',
        text: '#FFFFFF',
        main: '#151419',
        div: mainColorDark,
        card: mainColorDark,

        header: mainColorDark,
        headerLogoDisplayLight: 'none',
        headerLogoDisplayDark: 'block',
        headerUserText: '#FFFFFF',
        headerPopUserSet: '#202229',
        headerPopUserSetBorder: '0.7px solid var(--stroke-dark, #4E5566)',
        headerPopUserSetBoxShadow: '0px 10px 39px 0px rgba(148, 166, 190, 0.40)',
        headerPopUserSetButton: '#FFFFFF',
        headerPopUserSetCheckbox: '#FFFFFF',
        headerPopUserSetCheckboxBefore: '#565EEF',
    };
    const lightTheme = {
        color: "#000000",
        backgroundColor: "#F1F1F1",
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

        //  def
        body: '#EAEEF6',
        text: '#000000',
        main: '#EAEEF6',
        div: mainColorLight,
        card: mainColorLight,

        header: mainColorLight,
        headerLogoDisplayLight: 'block',
        headerLogoDisplayDark: 'none',
        headerUserText: '#565EEF',
        headerPopUserSet: '#FFFFFF',
        headerPopUserSetBorder: '0.7px solid rgba(148, 166, 190, 0.4)',
        headerPopUserSetBoxShadow: '0px 10px 39px 0px rgba(26, 56, 101, 0.21)',
        headerPopUserSetButton: '#565EEF',
        headerPopUserSetCheckbox: '#EAEEF6',
        headerPopUserSetCheckboxBefore: '#94A6BE',
    };
    // 3.
    const currentTheme = useGlobal();
    // 4.
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


// import { Outlet } from "react-router-dom";
// import { useState } from "react";

// // Styles
// import { GlobalStyle } from "../../Global/Global.styled.js";
// import { GlobalStyleALL } from '../../components/GlobalALL/GlobalALL.styled.js';
// import { lightTheme, darkTheme, GlobalStyleLightDark, ThemeProvider } from '../../components/Themes/ThemesLightDark.styled.js';

// export default function Layout() {

//     // // Toggle theme function
//     // const [theme, setTheme] = useState('light');
//     // const toggleTheme = () => {
//     //     if (theme === 'light') {
//     //         setTheme('dark');
//     //         //console.log('dark theme');
//     //     } else {
//     //         setTheme('light');
//     //         //console.log('light theme');
//     //     }
//     // };

//     return (
//         // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//         //     <GlobalStyle />
//         //     <GlobalStyleALL />
//         //     <GlobalStyleLightDark />

//             <Outlet />

//         // </ThemeProvider>
//     );
// }