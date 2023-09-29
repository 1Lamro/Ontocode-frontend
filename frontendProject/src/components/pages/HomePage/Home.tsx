import homepage1 from './homepage1.jpg'
import styles from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../app/store';
import adam from './adam.jpg'
import ali from './ali.jpg'
import emin from './emin.jpg'
import antar from './antar.jpg'
import React, { useEffect, useState } from "react";
import { authSignUp } from '../../../features/applicationSlice';

const Home = () => {
    const token = useSelector((state: RootState) => state.application.token)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState<string>("");
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState<string>("Введите емайл");
    const [passwordError, setPasswordError] = useState("Введите пароль");
    const [formValid, setFormValid] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const handleSignUp = (e: React.FormEvent): void => {
        e.preventDefault();
        dispatch(authSignUp({
            _id: "", username, password, email,
            role: "",
            avatar: "",
            progress: ""
        }));
        navigate("/SignIn");
    };

    const navigate = useNavigate();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const valid =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!valid.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError("Некорректный емайл");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3) {
            setPasswordError("давай еще");
            if (!e.target.value) {
                setPasswordError("Введите пароль");
            }
        } else {
            setPasswordError("");
        }
    };

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
        }
    };

    return (
        <>
            <div className={styles.firstBlock}>
                <div className={styles.imageCont}><img src={homepage1} alt="" className={styles.homepage1} /></div>
                {!token ? <div className={styles.regForm}>
                    <div>
                        Присоединитесь к крупному мировому сообществу на Ontocode бесплатно.
                    </div>
                    <form className={styles.form} onSubmit={handleSignUp}>
                        <h2 id={styles.h2}>Регистрация</h2>
                        <input
                            type="text"
                            value={username}
                            placeholder="Логин..."
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            onBlur={(e) => handleBlur(e)}
                            name="password"
                            type="password"
                            value={password}
                            placeholder="Пароль..."
                            onChange={(e) => handlePassword(e)}
                        />
                        {passwordDirty && passwordError && (
                            <div className={styles.error}>{passwordError}</div>
                        )}
                        <input
                            onBlur={(e) => handleBlur(e)}
                            name="email"
                            value={email}
                            placeholder="Введите свою почту..."
                            onChange={(e) => handleEmail(e)}
                        />
                        {emailDirty && emailError && (
                            <div className={styles.error}>{emailError}</div>
                        )}
                        <button disabled={!formValid} type="submit" className={styles.regButton}>
                            Зарегистрироваться
                        </button>
                    </form>
                    <div className={styles.text}>
                        By signing up for Ontocode, you agree to Ontocode's Terms of Service &
                        Privacy Policy.
                    </div>
                    <div className={styles.but}>
                        Уже есть аккаунт?{" "}
                        <Link to="/SignIn" className={styles.sign}>
                            Войти
                        </Link>
                    </div>
                </div>
                    : <>
                        <div className={styles.text5}>
                            <p>

                            </p>
                            <p>
                                Твой путь начинается всегда с Ontocode!
                            </p>
                        </div>
                    </>}
            </div>
                            
            <div className={styles.thirdBlock}>
                <div className={styles.text6}>
                    Наша команда
                </div>
                <div className={styles.thirdBlockCont}>
                    <div className={styles.first}>
                        <div className={styles.image}><img src={ali} alt="" className={styles.photo} /></div>
                        <div className={styles.title}>
                            <div className={styles.min}>Исраилов Али</div>
                            <div className={styles.max}>Когда не болел</div>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.image}><img src={adam} alt="" className={`${styles.photo} ${styles.adam}`} /></div>
                        <div className={styles.title}>
                            <div className={styles.min}>Ибрагимов Адам</div>
                            <div className={styles.max}>Человек чат</div>
                        </div>
                    </div>
                    <div className={styles.third}>
                        <div className={styles.image}><img src={antar} alt="" className={styles.photo} /></div>
                        <div className={styles.title}>
                            <div className={styles.min}>Окуев Антар</div>
                            <div className={styles.max}>Пострадал от мультера</div>
                        </div>
                    </div>
                    <div className={styles.fourth}>
                        <div className={styles.image}><img src={emin} alt="" className={styles.photo} /></div>
                        <div className={styles.title}>
                            <div className={styles.min}>Магомадов Магомед-Эмин</div>
                            <div className={styles.max}>Неправда</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;