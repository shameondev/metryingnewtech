import {cn} from "shared/lib/classNames";
import s from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}

type ButtonProps = {
    className?: string;
    theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({className, theme, children, ...rest}) => {
    return (
        <button className={cn(s.Button, {}, [className, s[theme]])} {...rest}>
            {children}
        </button>
    );
};