import { cn } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';

import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

type NavbarProps = {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={cn(s.Navbar, {}, [className])}>
        <div className={s.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={s.mainLink} to="/">Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
        </div>
    </div>
);
