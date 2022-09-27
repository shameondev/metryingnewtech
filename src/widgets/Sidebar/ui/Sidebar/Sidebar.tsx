import { cn } from 'shared/lib/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import s from './Sidebar.module.scss';

type SidebarProps = {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={cn(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button onClick={onToggle}>{t('translation:Переключить')}</Button>
            <div className={s.switchers}>
                <ThemeSwitcher className={s.switcher} />
                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
};
