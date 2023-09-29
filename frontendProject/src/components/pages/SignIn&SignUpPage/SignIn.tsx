import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { authSignIn } from "../../../features/applicationSlice";
import styles from "./SignIn&SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../../app/store";
// import Spinner from '../pages/CatalogPage/Spinner';

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const token = useSelector((state: RootState) => state.application.token);
  //const signin = useSelector((state: RootState) => state.application.signingIn);
  const error = useSelector((state: RootState) => state.application.error as string)

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent): void => {
    e.preventDefault()
    dispatch(authSignIn({
      _id: "", password, email,
      username: "",
      role: "",
      avatar: "",
      progress: ""
    }));

  };
//   if (signin === true) {
//     return <Spinner />;
//   }


  if (token) {
    navigate("/");
  }

  return (
    <div className={styles.author}>
      <div className={styles.authorinput}>
        {error && <div className={styles.error}>Неверный email или пароль</div>}
        <form className={styles.form} onSubmit={handleSignIn}>
          <h2 id={styles.h2}>Авторизация</h2>
          <input
            type="text"
            value={email}
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Пароль..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.regButton}>Войти</button>
        </form>
        <div className={styles.but}>
          Хотите создать аккаунт?{" "}
          <br />
          <Link to="/SignUp" className={styles.reg}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
