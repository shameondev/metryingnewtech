import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {useTheme} from "./theme/useTheme";
import cn from './helpers/classNames/classNames';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <div onClick={toggleTheme}>Switch theme</div>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};