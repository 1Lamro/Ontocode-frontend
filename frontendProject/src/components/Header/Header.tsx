import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from './Header.module.css'
import logo from '../../../public/logo.svg'
import triangle from './nav_triangle.svg'
import search from './search.png'

const Header = () => {
  const token = useSelector((state: RootState) => state.application.token);
  const removeToken = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [scrolled, setScrolled] = useState(false)

  if (window.scrollY > 0) {
    setScrolled(true)
  }

  console.log(scrolled)

  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navigation}>
        <Link to='/' ><img src={logo} alt="logo" className={styles.logo} /></Link>
        <Link to='/courses' className={styles.zero}><p>Courses</p><img src={triangle} alt="" /></Link>
        <Link to='/price' className={styles.zero}><p>Pricing</p><img src={triangle} alt="" /></Link>
        <Link to='/for-teams' className={styles.zero}><p>For Teams</p><img src={triangle} alt="" /></Link>
      </nav>
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
        <div className={styles.loginContainer}>
          <img src={search} className={styles.search} />
          <Link to='/SignUp' className={styles.loginButton}><p>Log In</p></Link>
        </div>
      )}
    </div>
  );
};

export default Header;