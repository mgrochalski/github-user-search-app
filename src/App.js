import styles from 'src/App.module.scss';
import Nav from "src/compontents/Nav";
import {useEffect, useState} from "react";
import Search from "src/compontents/Search";
import Result from "src/compontents/Result";
import {getUser} from "src/api/github";

function App() {
    const [isDark, setIsDark] = useState(true);
    const [bio, setBio] = useState(null);
    const [login, setLogin] = useState(null);
    const [isNoResult, setIsNoResult] = useState(false);

    useEffect(() => {
        let ignore = false;

        getUser(login).then((result) => {
            if (ignore) {
             return;
            }

            if (result === null) {
                setIsNoResult(true);
            } else {
                setBio(result);
                setIsNoResult(false);
            }
        });

        return () => {
            ignore = true;
        }
    }, [login])

    const searchUser = (userName) => {
        setLogin(userName);
    }

    return (
        <div className={`${styles.app} app`} data-theme={isDark ? 'dark' : 'light'}>
            <div className={styles.content}>
                <Nav isDarkMode={isDark} onModeChange={() => {
                    setIsDark(!isDark);
                }}/>
                <Search onSearchHandler={searchUser} isNoResult={isNoResult}/>
                <Result bio={bio}/>
            </div>
        </div>
    );
}

export default App;
