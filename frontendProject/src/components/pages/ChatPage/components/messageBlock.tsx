import { useState, useEffect } from 'react';
import styles from '../chat.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { allUsers } from '../../../../features/userSlice';
import axios from 'axios';

const messageBlock = ({ socket }) => {

    const [message, setMessage] = useState('')

    const token = useSelector((state: RootState) => state.application.token);
    const user = useSelector((state: RootState) => state.user.users)
    const dispatch = useDispatch()


    const isTyping = () => socket.emit('typing', `${localStorage.getItem('user',)} is typing`)

    function parseJWT(tokenUser: string | number | null) {
        if (typeof tokenUser !== "string") {
            // Обработка ошибки или возврат значения по умолчанию
            return null;
        }
        const base64Url = tokenUser.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        return JSON.parse(jsonPayload);
    }
    const ownid = parseJWT(token);
    const oneUser = user.filter(item => item._id === ownid.userId)


    useEffect(() => {
        dispatch(allUsers)
    }, [dispatch])

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim() && oneUser[0].username) {
            socket.emit('message', {
                text: message,
                name: oneUser[0].username,
                id: `${socket.id}-${Math.random()}`,
                socketID: socket.id
            })
    
            axios.post(`http://localhost:3333/message/650d80f8338de9dad1e9fc04`, { sender: oneUser[0]._id, text: message });
            // const allMess = axios.get(`http://localhost:3333/chat/650d80f8338de9dad1e9fc04`)
            // .then((response) => {
            //     return response.data
            // })
            // console.log(allMess);
            
        }
        setMessage('');


    }
    return (
        <div className={styles.messageBlock}>
            <form className={styles.form} onSubmit={handleSend}>
                <input
                    type="text"
                    className={styles.userMessage}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={isTyping}
                />
                <button className={styles.btnM}>Cказать</button>
            </form>
        </div>
    );
};

export default messageBlock;