import styles from './MainUserInformation.module.scss';

const MainUserInformation = ({user}) => {
    const created = new Date(user.created_at);
    const joined = `Joined ${created.toLocaleString('en-gb', {day:'numeric', month:'short', year:'numeric'})}`;

    return (
        <div className={styles.main}>
            <div className={styles.user}>
                <div className={styles.name}>{user.name ?? '(No name)'}</div>
                <div className={styles.login}>@{user.login}</div>
            </div>
            <div className={styles.date}>{joined}</div>
        </div>
    )
}

export default MainUserInformation;
