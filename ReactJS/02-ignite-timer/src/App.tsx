import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <h1>Hello World</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
