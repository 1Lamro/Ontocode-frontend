import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../../public/logo.svg'
import triangle from './nav_triangle.svg'
import search from './search.png'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <nav className={styles.navigation}>
                <Link to='/' ><img src={logo} alt="logo" className={styles.logo} /></Link>
                <Link to='/resources' className={styles.zero}><p>Resources</p><img src={triangle} alt="" /></Link>
                <Link to='/price' className={styles.zero}><p>Pricing</p><img src={triangle} alt="" /></Link>
                <Link to='/for-teams' className={styles.zero}><p>For Teams</p><img src={triangle} alt="" /></Link>
            </nav>
            <div className={styles.loginContainer}>
                <img src={search} className={styles.search}/>
                <Link to='/login' className={styles.loginButton}><p>Log In</p></Link>
            </div>
        </div>
    );
};

export default Header;