import { useState, useEffect } from 'react';
import styles from '../chat.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { getMessage, sendMessage } from '../../../../features/chatSlice';
import { allUsers } from '../../../../features/userSlice';

const messageBlock = ({ socket }) => {

    const [message, setMessage] = useState('')
    const [load, setLoad] = useState(false)

    const token = useSelector((state: RootState) => state.application.token);
    const user = useSelector((state: RootState) => state.user.users);
    const dispatch = useDispatch()

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
        const oneUser = Array.isArray(user) ? user.filter(item => item._id === ownid.userId) : [];
        const isTyping = () => socket.emit('typing', `${oneUser[0].username} печатает`)

        const handleSend = (e) => {
            e.preventDefault();
            console.log('send');
            if (message.trim() && oneUser[0].username) {
                dispatch(sendMessage({ oneUser, message }))
                socket.emit('message', {
                    text: message,
                    name: oneUser[0].username,
                    id: `${socket.id}-${Math.random()}`,
                    socketID: socket.id
                })
            }
            setLoad(() => !load)
            setMessage('');
        }

        useEffect(() => {
            dispatch(getMessage())
            dispatch(allUsers())
            console.log('messageBlock');
        }, [dispatch, load])

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
                <button className={styles.btnM}>Отправить</button>
            </form>
        </div>
    );
};

export default messageBlock;