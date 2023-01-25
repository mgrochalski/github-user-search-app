import styles from './Social.module.scss'
import {BioBadge, options} from 'src/compontents/User/BioBadge';

const Social = () => (
    <>
        <div className={styles.main}>
            <BioBadge type={options.location} value='San Francisco'/>
            <BioBadge type={options.twitter}/>
        </div>
        <div className={styles.main}>
            <BioBadge type={options.website} value='https://github.blog'/>
            <BioBadge type={options.company} value='@github'/>
        </div>
    </>
);

export default Social;