import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import styles from '../chat.module.css'
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../../../features/userSlice";
import { RootState } from "../../../../app/store";

const sideBar = ({ socket }) => {

    const [users, setUsers] = useState([]);
    const token = useSelector((state: RootState) => state.application.token);
    const User = useSelector((state: RootState) => state.user.users);

    const dispatch = useDispatch()

    // function parseJWT(tokenUser: string | number | null) {
    //     if (typeof tokenUser !== "string") {
    //         // Обработка ошибки или возврат значения по умолчанию
    //         return null;
    //     }
    //     const base64Url = tokenUser.split(".")[1];
    //     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    //     const jsonPayload = decodeURIComponent(
    //         atob(base64)
    //             .split("")
    //             .map(function (c) {
    //                 return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    //             })
    //             .join("")
    //     );
    //     return JSON.parse(jsonPayload);
    // }
    // const ownid = parseJWT(token);
    // const newUser = User.map(item => item.online === true)
    // console.log(newUser);
    



    useEffect(() => {
        if (token) {
            dispatch(allUsers())
        }
        socket.on('responseNewUser', (data) => setUsers(data))
    }, [ dispatch]);
    console.log(User);
    

    // const names: (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined)[] = [];
    // User.map(item => names.push(item.username))


    return (<div className={styles.sidebar}>
        <h1 className={styles.headerS}>Online</h1>
        <ul className={styles.users}>
            {User.map(item =>  item.online === true ? <li key={item._id}>{item.username}<span className={styles.span1}>•</span></li> : '')}
            {/* {token ? User.map((item, index) => item._id === ownid.userId ? <li key={item._id}>{item.username} <span className={styles.span1}>•</span> </li> : <li>{names[index]}</li>) : null} */}
        </ul>
    </div>);
};

export default sideBar