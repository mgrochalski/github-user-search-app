import styles from './Statistics.module.scss';

const Statistics = ({user}) => (
    <div className={styles.main}>
        <div className={styles.stat}>
            <div className={styles.statTitle}>Repos</div>
            <div className={styles.statValue}>{user.public_repos}</div>
        </div>
        <div className={styles.stat}>
            <div className={styles.statTitle}>Followers</div>
            <div className={styles.statValue}>{user.followers}</div>
        </div>
        <div className={styles.stat}>
            <div className={styles.statTitle}>Following</div>
            <div className={styles.statValue}>{user.following}</div>
        </div>
    </div>
);

export default Statistics;