import homepage1 from './homepage1.jpg'
import styles from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Courses, fetchCourses } from '../../../features/courseSlice';
import React from 'react';
import { RootState } from '../../../app/store';
import adam from './adam.jpg'
import ali from './ali.jpg'
import emin from './emin.jpg'
import antar from './antar.jpg'

const Home = () => {
    const courses = useSelector((state: RootState) => state.course.course)
    const dispatch = useDispatch()
    const token = useSelector((state: RootState) => state.application.token)
    console.log(token)

    React.useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    return (
        <>
            <div className={styles.firstBlock}>
                <div className={styles.imageCont}><img src="" alt="" className={styles.homepage1} /></div>
                {!token ? <div className={styles.regForm}>
                    <div>
                        Join the millions learning to code
                        with Codecademy for free
                    </div>
                    <form action="">
                        <p>Email</p>
                        <input type="text" />
                        <p>Password</p>
                        <input type="text" />
                        <button type='submit'>Sign up</button>
                    </form>
                    <p>
                        By signing up for Codecademy, you agree to Codecademy's
                        Terms of Service & Privacy Policy.
                    </p>
                    <h5>Or sign up using:</h5>
                    <div>
                        <div>google</div>
                        <div>facebook</div>
                        <div>linkedin</div>
                        <div>github</div>
                        <div>apple</div>
                    </div>
                </div>
                    : null  }

            </div>

            <div className={styles.thirdBlock}>
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