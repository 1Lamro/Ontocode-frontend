import { useEffect, useState } from "react";
import styles from '../chat.module.css'
import { useDispatch, useSelector } from "react-redux";
import { allUsers, oneUser } from "../../../../features/userSlice";
import { RootState } from "../../../../app/store";

const sideBar = ({ socket }) => {

    const [users, setUsers] = useState([]);
    const token = useSelector((state: RootState) => state.application.token);
    const User = useSelector((state: RootState) => state.user.users);

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


    useEffect(() => {
        if (token) {
            dispatch(allUsers())
        }
        socket.on('responseNewUser', (data) => setUsers(data))
    }, [dispatch, socket, users]);

    // const filteredList = users.filter((value, index, self) =>
    //     index === self.findIndex((t) => (
    //         t.user === value.user && t.socketID === value.socketID
    //     ))
    // )

    // console.log(ownid);


    return (<div className={styles.sidebar}>
        <h1 className={styles.headerS}>Online</h1>
        <ul className={styles.users}>
            {token ?
                User.map(item => ownid.userId === item._id ? <li key={item._id}>{item.username}</li> : <li key={item._id} >Anonim {Math.floor(Math.random() * 90) + 10}</li>) : null}

        </ul>
    </div>);
};

export default sideBar