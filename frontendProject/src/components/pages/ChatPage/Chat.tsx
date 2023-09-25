import SideBar from "./components/sideBar";
import Body from "./components/body";
import MessageBlock from "./components/messageBlock";
import styles from './chat.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getMessage } from "../../../features/chatSlice";

function Chat({ socket }) {
  const dispatch = useDispatch()

  // const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('');
  const messages = useSelector((state: RootState) => state.chat.chat)

  useEffect(() => {
    socket.on('response', (data) => dispatch(getMessage()))
  }, [socket, messages]);

  useEffect(() => {
    dispatch(getMessage())
    socket.on('responseTyping', (data) => {
      setStatus(data)
      setTimeout(() => setStatus(''), 1000)
    })

  }, [socket, dispatch])

  return (
    <div className={styles.chat}>
      <SideBar socket={socket} />
      <main className={styles.main}>
        <Body status={status} socket={socket} />
        <MessageBlock socket={socket} />

      </main>
    </div>
  )
}

export default Chat