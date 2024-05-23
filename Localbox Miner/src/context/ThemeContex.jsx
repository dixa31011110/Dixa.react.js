import { createContext, useState } from "react";

export const ThemeContex = createContext()


export function ThemeContexProvider({ children }) {
    const [theme, setTheme] = useState("light")

    const ToggleThem = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }
    return (<ThemeContex.Provider value={{ theme, ToggleThem }}>
        {children}
    </ThemeContex.Provider>)
}