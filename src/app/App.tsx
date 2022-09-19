import './styles/index.scss'

import {cn} from 'shared/lib/classNames';
import {AppRouter} from "app/providers/RouteProvider/ui/AppRouter";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    return (
        <div className={cn('app')}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};