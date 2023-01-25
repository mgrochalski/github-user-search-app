import styles from './Search.module.scss';
import loup from 'src/images/icon-search.svg';

const Search = () => (
    <div className={styles.main}>
        <div className={styles.search}>
            <img src={loup} alt='' />
            <input placeholder='Search GitHub username...' className={styles.search_input}/>
        </div>
        <button className={styles.btn}>Search</button>
    </div>
)

export default Search;