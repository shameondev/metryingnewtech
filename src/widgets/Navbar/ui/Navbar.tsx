import { cn } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';

import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import s from './Navbar.module.scss';

type NavbarProps = {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(s.Navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={s.mainLink}
                    to="/"
                >
                    {t('Главная страница')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
