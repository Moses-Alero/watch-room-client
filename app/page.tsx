import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/Component/Header/Header'
import Video from '@/Component/Video/Video'
import Chat from '@/Component/Chat/Chat'

export default function Home() {
  return (
    <div>
    <Header />
  <div className={styles.video_and_chat_container}>
    <Video />
    <Chat/>
  </div>
  </div>
  )
}
