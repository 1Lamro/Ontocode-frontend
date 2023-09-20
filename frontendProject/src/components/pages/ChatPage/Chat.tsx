import SideBar from "./components/sideBar";
import Body from "./components/body";
import MessageBlock from "./components/messageBlock";
import styles from './chat.module.css'

function Chat({socket}) {
  return (
    <div className={styles.chat}>
        <SideBar/>
        <main className={styles.main}>
          <Body/>
          <MessageBlock socket={socket}/>

        </main>
    </div>
  )
}

export default Chat