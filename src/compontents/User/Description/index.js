import styles from './Description.module.scss';

const Description = ({user}) => (
    <div className={styles.main}>
        {user.bio ?? '(No bio)'}
    </div>
);

export default Description;