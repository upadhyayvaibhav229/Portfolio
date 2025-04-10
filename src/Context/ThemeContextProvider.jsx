import { useState } from "react"
import ThemeContext from "./useTheme"

const ThemeContextProvider = ({ children}) => {
    const [theme, setTheme] = useState('dark')
    
    function ToggleTheme() {
        setTheme((prevtheme) => prevtheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider