import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from './Header.module.css'
import logo from '../../../public/logo.svg'
import search from './search.png'
import chat from './chat.svg'
import { joinInChat } from '../../features/userSlice';
import Chat from '../pages/ChatPage/Chat';
import { useEffect } from 'react';

const Header = ({ socket }) => {
  const [joinChat, setJoinChat] = useState(false)

  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.application.token);
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const removeToken = () => {
    localStorage.removeItem("token");
    navigate('/')
    window.location.reload();
  };

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

  const handleJoinToChat = (id) => {
    dispatch(joinInChat(id))
    setJoinChat(() => !joinChat)
  }

  return (
    <div className={styles.headerContainer}>
      {/* <div >555</div> */}
      <nav className={styles.navigation}>
        <Link to='/' ><img src={logo} alt="logo" className={styles.logo} /></Link>
        <Link to='/courses' className={styles.zero}><p>Courses</p><img src={triangle} alt="" /></Link>
        <Link to='/price' className={styles.zero}><p>Pricing</p><img src={triangle} alt="" /></Link>
        <Link to='/team' className={styles.zero}><p>For Teams</p><img src={triangle} alt="" /></Link>
      </nav>
      {token ? (<>
        <div className={styles.sideBarChat}>
          {joinChat && <Chat socket={socket}/>}<img onClick={() => handleJoinToChat(ownid.userId)} src={chat} alt="" />
        </div>
        <div>
          <button onClick={removeToken} className={styles.buttonExit}>
            ВЫЙТИ
          </button>
          <Link to="/Profile">
            {/* <img src={} alt="profile" className={styles.profile} /> */}
            <div>Профиль</div>
          </Link>
        </div>
      </>
      ) : (
          <div className={styles.loginContainer}>
            <div>
              <Link to="/chat"><img src={chat} alt="" /></Link>
            </div>
          )}
        </div>
      </div>

  );
};

export default Header;