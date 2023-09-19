import React from 'react';
import styles from '../chat.module.css'
import {useNavigate} from 'react-router-dom';

const body = () => {
    
    const navigate = useNavigate();

    const handleLeave = () => {
        localStorage.removeItem('user')
        navigate('/chatForm')
    }
    return (
        <div>
            <>
                <header className={styles.headerB}>
                    <button className={styles.btn} onClick={handleLeave}>Покинуть чат</button>
                </header>

                <div className={styles.containerB}>
                    <div className={styles.chats}>
                        <p className={styles.senderName}>Вы</p>
                        <div className={styles.messageSender}>
                            <p>Hello</p>
                        </div>
                    </div>

                    <div className={styles.chats}>
                        <p>Вы</p>
                        <div className={styles.messageRecipient}>
                            <p>Hello</p>
                        </div>
                    </div>

                </div>

            </>
        </div>
    );
};

export default body;