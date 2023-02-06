import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";


const App = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme( theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button> <br/>
            <Link to={"/"}>Main page</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;

