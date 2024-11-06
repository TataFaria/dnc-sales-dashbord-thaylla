import { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/styles";
import { AppThemeContextProps } from "@/types";

export const AppThemeContext = createContext<AppThemeContextProps | undefined>(undefined)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const savedTheme = localStorage.getItem('theme')
    const [appTheme, setAppTheme] = useState(savedTheme ?? 'light')


    const toggleTheme = () => {
        setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('theme', appTheme)
    })

    return (
        <AppThemeContext.Provider value={{ appTheme, toggleTheme }} >
            <ThemeProvider theme={appTheme === 'light' ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}









//localStorage serve para quando a pessoa entrar no site vai ficar
// salvo o tema que ela colocar (dark ou light)
//Por padrão vamos deixar como padrão o tema light

// useEffect(() =>{localStorage.setItem('theme', appTheme)})
//Esse código acima é para se houver alguma mudança no tema, essa mudança será salva no localStorage