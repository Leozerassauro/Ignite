import { createContext, ReactNode, useEffect, useState } from 'react'
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'

enum ThemeType {
  light = 'light',
  dark = 'dark',
}

interface ThemeContextProps {
  theme: ThemeType
  toggleTheme: () => void
}

interface ThemeContextProviderProps {
  children: ReactNode
}

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(ThemeType.dark)

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      '@ignite-timer:selected-theme-1.0.0',
    )

    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  function toggleTheme() {
    let selectedTheme
    if (theme === ThemeType.dark) {
      selectedTheme = ThemeType.light
    } else {
      selectedTheme = ThemeType.dark
    }

    setTheme(selectedTheme)
    localStorage.setItem('@ignite-timer:selected-theme-1.0.0', selectedTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyledComponents theme={themes[theme]}>
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  )
}
