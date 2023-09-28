import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from './Header.module.css'
import logo from '../../../public/logo.svg'
import triangle from './nav_triangle.svg'
import search from './search.png'
import chat from './chat.svg'
import { useEffect, useState } from 'react';

const Header = () => {
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

  const fixedClass = scrollY > 0 ? styles.headerFixed : null;

  const removeToken = () => {
    localStorage.removeItem("token");
    navigate('/')
    window.location.reload();
  };

  return (
    <div className={`${styles.headerClass} ${fixedClass}`}>
      <div className={styles.header}>
        <nav className={styles.navigation}>
          <Link to='/' ><img src={logo} alt="logo" className={styles.logo} /></Link>
          <Link to='/courses' className={styles.zero}><p>Courses</p><img src={triangle} alt="" /></Link>
          <Link to='/price' className={styles.zero}><p>Pricing</p></Link>
          <Link to='/team' className={styles.zero}><p>For Teams</p></Link>
        </nav>
        {token ? (<>
          <div>
            <Link to="/chat"><img src={chat} alt="" /></Link>
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
            <img src={search} className={styles.search} />
            <Link to='/SignUp' className={styles.loginButton}><p>Log In</p></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;