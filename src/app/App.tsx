import './styles/index.scss'

import {cn} from 'shared/lib/classNames';
import {AppRouter} from "app/providers/RouteProvider/ui/AppRouter";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "shared/lib/useTheme";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};