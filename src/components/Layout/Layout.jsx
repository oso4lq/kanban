import { Outlet } from "react-router-dom";
import { useState } from "react";

// Styles
import { GlobalStyle } from "../../Global/Global.styled.js";
import { GlobalStyleALL } from '../../components/GlobalALL/GlobalALL.styled.js';
import { lightTheme, darkTheme, GlobalStyleLightDark, ThemeProvider } from '../../components/Themes/ThemesLightDark.styled.js';

export default function Layout() {

    // Toggle theme function
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            //console.log('dark theme');
        } else {
            setTheme('light');
            //console.log('light theme');
        }
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <GlobalStyleALL />
            <GlobalStyleLightDark />

            <Outlet />

        </ThemeProvider>
    );
}