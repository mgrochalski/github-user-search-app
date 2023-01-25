import styles from './MainUserInformation.module.scss';

const MainUserInformation = () => (
    <div className={styles.main}>
        <div className={styles.user}>
            <div className={styles.name}>The Octocat</div>
            <div className={styles.login}>@octocat</div>
        </div>
        <div className={styles.date}>Joined 25 Jan 2011</div>
    </div>
);

export default MainUserInformation;
