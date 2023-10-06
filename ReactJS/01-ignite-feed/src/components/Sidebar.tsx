// Native
import { PencilLine } from 'phosphor-react'
// Components
import { Avatar } from './Avatar'
// Styles
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/Leozerassauro.png"/>
        <strong>Leonardo Girardi</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}