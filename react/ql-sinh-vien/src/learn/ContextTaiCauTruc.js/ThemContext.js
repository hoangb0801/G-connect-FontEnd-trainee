import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    function handlClick() {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    const data = {
        theme, handlClick
    }
    return < ThemeContext.Provider value={data} >
        {children}
    </ThemeContext.Provider >

}

export { ThemeContext, ThemeProvider }