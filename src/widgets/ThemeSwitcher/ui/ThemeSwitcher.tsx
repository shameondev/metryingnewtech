import {cn} from "shared/lib/classNames";
import s from './ThemeSwitcher.module.scss';
import {useTheme} from "shared/lib/useTheme";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Theme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button";

type ThemeSwitcherProps = {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={cn(s.ThemeSwitcher, {}, [className])}>
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};