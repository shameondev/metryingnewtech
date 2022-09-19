import {Link} from 'react-router-dom';
import './styles/index.scss'

import {useTheme} from "shared/lib/useTheme";
import {cn} from 'shared/lib/classNames';
import {AppRouter} from "app/providers/RouteProvider/ui/AppRouter";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <div onClick={toggleTheme}>Switch theme</div>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <AppRouter/>
        </div>
    );
};