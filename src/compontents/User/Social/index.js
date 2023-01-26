import styles from './Social.module.scss'
import {BioBadge, options} from 'src/compontents/User/BioBadge';

const Social = ({user}) => (
    <>
        <div className={styles.main}>
            <BioBadge type={options.location} value={user.location}/>
            <BioBadge type={options.twitter} value={user.twitter_username}/>
        </div>
        <div className={styles.main}>
            <BioBadge type={options.website} value={user.blog}/>
            <BioBadge type={options.company} value={user.company}/>
        </div>
    </>
);

export default Social;