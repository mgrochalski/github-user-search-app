import styles from './Nav.module.scss';
import DarkModeImg from 'src/images/icon-moon.svg';
import LightModeImg from 'src/images/icon-sun.svg';

const Nav = ({isDarkMode, onModeChange}) => {
    const mode = isDarkMode ? "Dark" :  "Light" ;
    const img = isDarkMode ? LightModeImg : DarkModeImg;

    return (
        <div className={styles.main}>
            <p className={styles.logo}>devfinder</p>

            <div className={styles.mode} onClick={onModeChange}>{mode}<img src={img} className={styles.img} alt='mode'/></div>
        </div>
    )
}


export default Nav;