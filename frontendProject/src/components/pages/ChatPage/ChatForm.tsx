// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './chat.module.css'

// const ChatForm = ({ socket }) => {

//     const navigate = useNavigate();
//     const [user, setUser] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem('user', user);
//         socket.emit('newUser', { user, soketID: socket.id })
//         navigate('/chat')
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit} className={styles.container}>
//                 <h2>Войти в чат</h2>
//                 <label htmlFor='user'> </label>
//                 <input type="text" id='user' value={user} className={styles.userInput} onChange={(e) => setUser(e.target.value)} />
//                 <button type='submit' className={styles.homeBtn}>Войти</button>
//             </form>
//         </div>
//     );
// };

// export default ChatForm;