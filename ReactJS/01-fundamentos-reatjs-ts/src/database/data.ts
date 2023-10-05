import { PostType } from "../components/Post";

export const POSTS: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Leozerassauro.png',
      name: 'Leonardo Girardi',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é IgniteFeed.' },
      { type: 'link', content:'IgniteFeed', href: 'https://github.com/Leozerassauro/Ignite/tree/main/ReactJS/01-fundamentos-reactjs'},
    ],
    publishedAt: new Date('2023-10-05 13:30:00'),
  },
  // {
  //   id: 2,
  //   author: {
  //     avatarUrl: 'https://github.com/1TATO.png',
  //     name: 'José Neto',
  //     role: 'Web 2 and Web 3 React front-end developer'
  //   },
  //   content: [
  //     { type: 'paragraph', content: 'Eai pessoal' },
  //     { type: 'paragraph', content: 'Finalizei o desafio Move.it da Rocketseat!! 🚀🚀🚀' },
  //     { type: 'link', content: 'move.it', href: 'https://github.com/1TATO/move.it' },
  //   ],
  //   publishedAt: new Date('2023-10-03 20:00:00'),
  // },
];