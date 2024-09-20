import React, { useContext, useEffect } from "react";
import { ThemeContext } from './context/ThemeContext';
import Button from './Components/Buttons';
import styles from './scss/App.scss';

function App() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
    console.log(darkTheme)
  }, [darkTheme]);

  return (
    <div className={styles.container}>
      <Button type="primary outlined" onClick={toggleTheme}>
        Toggle Theme
      </Button>

      <Button type="primary primary outlined" state='disabled' onClick={toggleTheme}>
        Toggle Theme
      </Button>
<br></br>
      <Button type="primary filled" onClick={toggleTheme}>
        Toggle Theme
      </Button>

      <Button type="primary filled" state='disabled'  onClick={toggleTheme}>
        Toggle Theme
      </Button>
      <br></br>

      <Button type="primary text" onClick={toggleTheme}>
        Toggle Theme
      </Button>

      <Button type="primary text" state='disabled'  onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
}

export default App;