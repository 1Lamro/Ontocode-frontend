import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
// import logo from './'
import styles from "./Header.module.css";

const Header = () => {
  const token = useSelector((state: RootState) => state.application.token);
  const removeToken = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <nav>123</nav>
      {token ? (
        <div>
          <button onClick={removeToken} className={styles.buttonExit}>
            ВЫЙТИ
          </button>
          <Link to="/Profile">
            {/* <img src={} alt="profile" className={styles.profile} /> */}
            <div>Профиль</div>
          </Link>
        </div>
      ) : (
        <Link to="/SignUp">
          <button className={styles.button}>Вход и регистрация</button>
        </Link>
      )}
    </div>
  );
};

export default Header;