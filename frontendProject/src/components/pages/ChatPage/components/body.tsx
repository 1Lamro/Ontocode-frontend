import { ReactNode, useEffect, useState, useRef } from 'react';
import styles from '../chat.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { deleteMessage, getMessage } from '../../../../features/chatSlice';
import Preloader from './Preloader';

const body = ({ status, socket, messages }) => {

    // const messages = useSelector((state: RootState) => state.chat.chat);
    const token = useSelector((state: RootState) => state.application.token);
    const user = useSelector((state: RootState) => state.user.users);
    const loading = useSelector((state: RootState) => state.chat.loading);

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

    const handleDeleteMess = (id) => {
        socket.emit('deleteMessage', id);
        dispatch(deleteMessage(id))
        dispatch(getMessage())
        console.log('delete');
    }

    const messagesRef = useRef(null);

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollIntoView({inline: "end"})
        }
        console.log('scroll');
        
    }, [messages])
    

    return (
        <div>
            <>
            {/* <div className={styles.header}></div> */}
                {/* {loading ? (
                    <Preloader />
                ) : ( */}

                    <div className={styles.containerB}>
                        {
                            messages.messages?.map((element: {
                                [x: string]: ReactNode; name: string | null;
                            }) => {
                                return (
                                    element.sender === oneUser[0]?._id ? (
                                        <div  ref={messagesRef}  className={styles.chats} key={element._id}  >
                                            <p className={styles.senderName}>Вы</p>
                                            <div className={styles.messageSender} >
                                                <p>{element.text}{
                                                    <button className={styles.deleteI} onClick={() => handleDeleteMess(element._id)}>x</button>
                                                }</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div  className={styles.chats} key={element._id}>
                                            <p>{Array.isArray(user) && user.map(item => item._id === element.sender ? item.username : null)}</p>
                                            <div className={styles.messageRecipient}>
                                                <p >{element.text}</p>
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