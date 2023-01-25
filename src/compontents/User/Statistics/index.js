import styles from './Statistics.module.scss';

const Statistics = () => (
    <div className={styles.main}>
        <div>
            <div className={styles.stat}>Repos</div>
            <div className={styles.statValue}>8</div>
        </div>
        <div>
            <div className={styles.stat}>Followers</div>
            <div className={styles.statValue}>3938</div>
        </div>
        <div>
            <div className={styles.stat}>Following</div>
            <div className={styles.statValue}>9</div>
        </div>
    </div>
);

export default Statistics;