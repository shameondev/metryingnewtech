import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {MainPage} from "./pages/MainPage/MainPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";

export const App = () => {
    return (
        <div className="app">
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <Routes>
               <Route path="/" element={<MainPage/>} />
               <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </div>
    );
};