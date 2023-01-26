import styles from './Statistics.module.scss';

const Statistics = ({user}) => (
    <div className={styles.main}>
        <div>
            <div className={styles.stat}>Repos</div>
            <div className={styles.statValue}>{user.public_repos}</div>
        </div>
        <div>
            <div className={styles.stat}>Followers</div>
            <div className={styles.statValue}>{user.followers}</div>
        </div>
        <div>
            <div className={styles.stat}>Following</div>
            <div className={styles.statValue}>{user.following}</div>
        </div>
    </div>
);

export default Statistics;