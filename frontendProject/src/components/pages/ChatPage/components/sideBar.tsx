import { useEffect, useState } from "react";
import styles from '../chat.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

const sideBar = ({ socket }) => {

    const token = useSelector((state: RootState) => state.application.token);
    const User = useSelector((state: RootState) => state.user.users);
    console.log(token)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on('responseNewUser', (data) => setUsers(data))

    }, [socket, users]);

    const filteredList = users.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.user === value.user && t.socketID === value.socketID
        ))
    )
    console.log(User, filteredList);
    return (
        <div className={styles.sidebar}>
            <h4 className={styles.headerS}>Users</h4>
            <ul className={styles.users}>
                {token !== undefined ? User.map(item => <li key={item._id}>{item.username}</li>) : filteredList.map(element => <li key={element.socketID}>{element.name}</li>)}
            </ul>
        </div>
    );
};

export default sideBar;