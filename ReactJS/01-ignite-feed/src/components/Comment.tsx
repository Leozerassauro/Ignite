// Native
import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
// Components
import { Avatar } from './Avatar';
// Styles
import styles from './Comment.module.css';

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((prevState) => (
      prevState + 1
    ))
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/1TATO.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Neto</strong>
              <time title="05 de Outubro às 11:50h" dateTime="2023-10-05 11:50:00">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}