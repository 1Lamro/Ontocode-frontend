import { useEffect, useState } from "react";
import styles from '../chat.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { oneUser } from "../../../../features/userSlice";

const sideBar = ({ socket }) => {

    function parseJWT(tokenUser) {
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
      
      const token = useSelector((state: RootState) => state.application.token);
      const User = useSelector((state: RootState) => state.user.users);

      const dispatch = useDispatch();



      const ownid = parseJWT(token);
      console.log(ownid)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        dispatch(oneUser(ownid.userId))
        socket.on('responseNewUser', (data) => setUsers(data))

    }, [socket, users]);

    const filteredList = users.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.user === value.user && t.socketID === value.socketID
        ))
    )
    console.log(User);
    return (
        <div className={styles.sidebar}>
            <h4 className={styles.headerS}>Users</h4>
            <ul className={styles.users}>
                {token !== undefined ?  <li >{User.username}</li> : filteredList.map(element => <li key={element.name}>{element.name}</li>)}
            </ul>
        </div>
    );
};

export default sideBar;