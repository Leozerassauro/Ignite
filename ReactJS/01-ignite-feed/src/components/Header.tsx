// Styles
import styles from './Header.module.css'
// Assets
import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite"/>
    </header>
  )
}