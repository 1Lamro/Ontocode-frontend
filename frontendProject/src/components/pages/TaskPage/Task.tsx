import React, { useState, useEffect } from 'react';
import { RootState } from '../../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Task.module.css'
import { getTask } from '../../../features/taskSlice';
import { useParams } from 'react-router-dom';
import {
    fetchComment,
    deletedComment,
    addComment,
  } from "../../../features/priceSlice";
import HTML from '../CoursePage/lang/HTML/HTML';

const Task = () => {
    const task = useSelector((state: RootState) => state.task.tasks)
    const id = useParams()
    console.log(id);

    useEffect(() => {
        dispatch(getTask(id));
    }, []);

    const dispatch = useDispatch<AppDispatch>();
    const comments = useSelector((state: RootState) => state.price.comment);
    const token = useSelector((state: RootState) => state.application.token);
    const [comment, setComment] = useState("");
    const [formData, setFormData] = useState({
        city: "",
        rentalDate: "",
        phoneNumber: "",
        paymentMethod: "",
    });

    const handleInputChange =
        (fieldsFilled, setFieldsFilled) => (e: React.FormEvent) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
            setFieldsFilled({
                ...fieldsFilled,
                [name]: !!value, // Поле заполнено, если его значение не пустое
            });
        };
    const handleOnChangeTextArea = (text: string) => {
        setComment(text);
    };

    function parseJWT(tokenUser: unknown) {
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

    const handleSendComment = (comment: string) => {
        if (!token) {
            alert("Вы не авторизованы");
        } else {
            dispatch(addComment({
                comment, userId: ownid.userId,
                user: undefined,
                _id: "",
                text: "",
                courseId: ""
            }));
        }
        setComment("");
    };

    const handleDeleteComment = (id: string, user: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        comments.map((item) => {
            if (ownid.userId === user) {
                dispatch(deletedComment(id));
            }
        });
    };

    React.useEffect(() => {
        dispatch(fetchComment());
    }, [dispatch]);

    return (<div className={styles.container}>
        <div className={styles.container2}>
            <h3>Тема: HTML и CSS</h3>
            <p>Задание: Попробуйте себя в роли начинающего разработчика сайта и попробуйте прописать одни из стандартных  тегов:
                <br />
                - div
                <br />
                - span
                <br />
                - h1
            </p>
        </div>
        <HTML/>
        <textarea
            name=""
            value={comment}
            onChange={(e) => handleOnChangeTextArea(e.target.value)}
            id={styles.textarea}    
            cols="30"
            rows="5"
        ></textarea>
        <button disabled={!comment} onClick={() => handleSendComment(comment)}>
            add
        </button>
        <div>
            {comments.map((item, index) => {
                const isCurrentUserComment = item.user?._id === ownid.userId;
                return (
                    <div key={index}>
                        <div>{item.user?.username}</div>
                        <div>
                            {item.text}
                            {isCurrentUserComment && (
                                <button
                                    onClick={() => {
                                        handleDeleteComment(item._id, item.user?._id);
                                        console.log(item._id, item.user?._id);
                                    }}
                                >
                                    x
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>

    );
};

export default Task;