import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button";
import {cn} from 'shared/lib/classNames';
import s from './LangSwitcher.module.scss'

type LangSwitcherProps = {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
            <Button className={cn(s.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>{t('Язык')}</Button>
    )
};