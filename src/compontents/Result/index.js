import styles from './Result.module.scss';
import placeholder from 'src/images/user-placeholder.png';
import MainUserInformation from "../User/MainInformation";
import Description from "../User/Description";
import Statistics from "../User/Statistics";
import Social from "../User/Social";


const Result = () => (
    <div className={styles.main}>
        <img src={placeholder} alt='avatar' className={styles.img} />
        <div className={styles.content}>
            <MainUserInformation />
            <Description />
            <Statistics />
            <Social />
        </div>
    </div>
)

export default Result;