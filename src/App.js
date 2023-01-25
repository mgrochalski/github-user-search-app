import styles from 'src/App.module.scss';
import Nav from "src/compontents/Nav";
import {useState} from "react";
import Search from "./compontents/Search";
import Result from "./compontents/Result";

function App() {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={`${styles.app} app`} data-theme={isDark ? 'dark' : 'light'}>
            <div className={styles.content}>
                <Nav isDarkMode={isDark} onModeChange={() => {
                    setIsDark(!isDark);
                }}/>
                <Search/>
                <Result/>
            </div>
        </div>
    );
}

export default App;
