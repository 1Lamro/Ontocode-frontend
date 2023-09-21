import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from '../chat.module.css'
import { useNavigate } from 'react-router-dom';

const body = ({ messages, status, socket }) => {

    const [isLeaving, setIsLeaving] = useState(false);
    const navigate = useNavigate();

    const handleLeave = () => {
        localStorage.removeItem('user')
        setIsLeaving(true)
        navigate('/chatForm')
    }

    useEffect(() => {
        if (isLeaving) {
            socket.emit('leaveChat')
        }
    }, [isLeaving, socket])

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
                                element.name === localStorage.getItem('user') ? (
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