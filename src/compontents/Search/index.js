import styles from './Search.module.scss';
import loup from 'src/images/icon-search.svg';
import {useRef} from "react";

const Search = ({onSearchHandler, isNoResult}) => {
    const inputRef = useRef(null);

    return (
        <div className={styles.main}>
            <div className={styles.search}>
                <img src={loup} alt=''/>
                <input ref={inputRef} placeholder='Search GitHub username...' className={styles.search_input}/>
            </div>
            <div className={styles.rightSide}>
                {isNoResult && <div className={styles.noResultText}>No Result</div> }
                <button className={styles.btn} onClick={() => {
                    onSearchHandler(inputRef.current.value)
                }}>Search
                </button>
            </div>
        </div>
    )
}

export default Search;