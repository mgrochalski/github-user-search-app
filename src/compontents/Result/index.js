import styles from './Result.module.scss';
import MainUserInformation from "src/compontents/User/MainInformation";
import Description from "src/compontents/User/Description";
import Statistics from "src/compontents/User/Statistics";
import Social from "src/compontents/User/Social";
import {getDefaultUser} from "src/api/github";

const Result = ({bio}) => {
    let user = getDefaultUser();

    if (bio !== null) {
        user = bio;
    }

    return (
        <div className={styles.main}>
            <img src={user.avatar_url} alt='avatar' className={styles.img}/>
            <div className={styles.content}>
                <MainUserInformation user={user} />
                <Description user={user} />
                <Statistics user={user} />
                <Social user={user} />
            </div>
        </div>
    )
}

export default Result;