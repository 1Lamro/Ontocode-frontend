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
    socket.on('response', (data) => {console.log('ChatSocket'); dispatch(getMessage())})
    console.log('Chat');
  }, [dispatch]);

  // useEffect(() => {
  //   socket.on('responseTyping', (data) => {
  //     // dispatch(getMessage())
  //     setStatus(data)
  //     setTimeout(() => setStatus(''), 1000)
  //   }, [dispatch])

  // }, [socket, dispatch])

  console.log(messages);
  
  return (
    <div className={styles.chat}>
      <SideBar socket={socket} />
      <main className={styles.main}>
        <Body status={status} socket={socket} messages={messages} />
        <MessageBlock socket={socket} />
      </main>
    </div>
  )
}

export default Chat