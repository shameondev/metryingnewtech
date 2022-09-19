import {cn} from "shared/lib/classNames";
import {AppLink} from "shared/ui/AppLink";

import s from './Navbar.module.scss';
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

type NavbarProps = {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={cn(s.Navbar, {}, [className])}>
            <ThemeSwitcher className={s.switcher}/>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={s.mainLink} to="/">Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
            </div>
        </div>
    );
};