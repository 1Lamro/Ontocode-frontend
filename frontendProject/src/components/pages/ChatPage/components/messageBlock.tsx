import { useState } from 'react';
import styles from '../chat.module.css'

const messageBlock = ({socket}) => {

    const [message, setMessage] = useState('')

    const handleSend = (e) => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem('user')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('user'),
                id: `${socket.io}`,
                socketID: socket.id
            })
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
                     />
                <button className={styles.btnM}>Cказать</button>
            </form>
        </div>
    );
};

export default messageBlock;