import { HeaderContainer } from './styles'
import { Timer, Scroll, Sun, Moon } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
