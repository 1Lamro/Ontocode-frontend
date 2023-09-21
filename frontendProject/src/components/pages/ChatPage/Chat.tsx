import SideBar from "./components/sideBar";
import Body from "./components/body";
import MessageBlock from "./components/messageBlock";
import styles from './chat.module.css'
import { useEffect, useState } from "react";

function Chat({ socket }) {

  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    socket.on('response', (data) => setMessages([...messages, data]))
  }, [socket, messages]);

  useEffect(() => {
    socket.on('responseTyping', (data) => {
      setStatus(data)
      setTimeout(() => setStatus(''), 1000)
    })

  }, [socket])


  return (
    <div className={styles.chat}>
      <SideBar socket={socket} />
      <main className={styles.main}>
        <Body messages={messages} status={status} socket={socket} />
        <MessageBlock socket={socket} />

      </main>
    </div>
  )
}

export default Chat