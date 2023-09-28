import { useEffect, useState } from "react";
import styles from '../chat.module.css'
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../../../features/userSlice";
import { RootState } from "../../../../app/store";

const sideBar = ({ socket }) => {

    const [users, setUsers] = useState([]);
    const token = useSelector((state: RootState) => state.application.token);
    const User = useSelector((state: RootState) => state.user.users);

    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(allUsers())
        }
        socket.on('responseNewUser', (data) => setUsers(data))
    }, [dispatch]);

    return (<div className={styles.sidebar}>
        <h1 className={styles.headerS}>Online</h1>
        <ul className={styles.users}>
            {Array.isArray(User) && User.map(item => item.online === true ? <li key={item._id}>{item.username}<span className={styles.span1}>•</span></li> : '')}
        </ul>
    </div>);
};

export default sideBar