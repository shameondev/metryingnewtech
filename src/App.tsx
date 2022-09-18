import { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";

export const App = () => {
    return (
        <div className="app">
            Hello World!
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                   <Route path="/" element={<MainPage/>} />
                   <Route path="/about" element={<AboutPage/>} />
                </Routes>
            </Suspense>
        </div>
    );
};