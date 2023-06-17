import React, { createContext, useState } from "react";
import Menu from "./components/menu/menu";
import RootRouter from "./components/router/rootRouter";
import "./App.css";
import "../src/components/home/home.scss";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="home-container">
          <div className="toggle-switch">
            <ReactSwitch
              onChange={toggleTheme}
              onColor="#72b626"
              checkedIcon={
                <i
                  className="fa-solid fa-sun mx-2"
                  style={{ color: "yellow" }}
                ></i>
              }
              uncheckedIcon={<i className="fa-solid fa-moon mx-2"></i>}
              checked={theme === "dark"}
            />
          </div>
          <div className="container-menu">
            <div className="navMenu">
              <Menu />
            </div>
          </div>
          <div className="content">
            <RootRouter />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
