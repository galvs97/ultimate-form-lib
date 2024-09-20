import React, { useContext } from "react";
import styles from './style.scss';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {

    const { globalTheme } = useContext(ThemeContext);

    return(
        <header className={`${styles.header} ${styles[globalTheme]}`}>
            <p className={styles[globalTheme]}>Header - {globalTheme}</p>
        </header>
    )
};

export default Header;