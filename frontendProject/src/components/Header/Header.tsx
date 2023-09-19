import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
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
  return (

    <div className={styles.headerContainer}>
      <nav className={styles.navigation}>
        <Link to='/' ><img src={logo} alt="logo" className={styles.logo} /></Link>
        <Link to='/resources' className={styles.zero}><p>Resources</p><img src={triangle} alt="" /></Link>
        <Link to='/price' className={styles.zero}><p>Pricing</p><img src={triangle} alt="" /></Link>
        <Link to='/for-teams' className={styles.zero}><p>For Teams</p><img src={triangle} alt="" /></Link>
      </nav>
      <div className={styles.loginContainer}>
      <Link to='/chatForm' ><img src={logo} alt="logo" className={styles.logo} /></Link>
        <img src={search} className={styles.search} />
        <Link to='/login' className={styles.loginButton}><p>Log In</p></Link>
      </div>
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