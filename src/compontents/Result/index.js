import styles from './Result.module.scss';
import MainUserInformation from "src/compontents/User/MainInformation";
import Description from "src/compontents/User/Description";
import Statistics from "src/compontents/User/Statistics";
import Social from "src/compontents/User/Social";

const Result = ({bio}) => (
    <div className={styles.main}>
        <div className={styles.content}>
            <img src={bio.avatar_url} alt='avatar' className={styles.img}/>
            <MainUserInformation user={bio}/>
            <Description user={bio}/>
            <Statistics user={bio}/>
            <Social user={bio}/>
        </div>
    </div>
);

export default Result;