import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const { theme, toggleTheme } = useTheme()
    const bool = true;
    return (
        <div className={classNames('app', {}, [theme])}>
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

