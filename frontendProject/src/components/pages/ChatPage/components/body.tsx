import { ReactNode, useEffect, useState } from 'react';
import styles from '../chat.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';

const body = ({ messages, status, socket }) => {

    const token = useSelector((state: RootState) => state.application.token);
    const user = useSelector((state: RootState) => state.user.users)
    const dispatch = useDispatch()

    const [isLeaving, setIsLeaving] = useState(false);
    const navigate = useNavigate();

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

    const handleLeave = () => {
        localStorage.removeItem('user')
        setIsLeaving(true)
        navigate('/')
    }

    useEffect(() => {
        if(isLeaving) {
            socket.emit('leaveChat')
        }
    },[isLeaving, socket])

    return (
        <div>
            <>
                <header className={styles.headerB}>
                    <button className={styles.btn} onClick={handleLeave}>Покинуть чат</button>
                </header>
                <div className={styles.containerB}>
                    {
                        messages.map((element: {
                            [x: string]: ReactNode; name: string | null;
                        }) => {
                            return (
                                element.name === oneUser[0].username ? (
                                    <div className={styles.chats} key={element.id}>
                                        <p className={styles.senderName}>Вы</p>
                                        <div className={styles.messageSender}>
                                            <p>{element.text}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.chats} key={element.id}>
                                        <p>{element.name}</p>
                                        <div className={styles.messageRecipient}>
                                            <p>{element.text}</p>
                                        </div>
                                    </div>
                                )
                            )
                        })
                    }
                    <div className={styles.status}>
                        <p>{status}</p>
                    </div>
                </div>
            </>
        </div>
    );
};

export default body;