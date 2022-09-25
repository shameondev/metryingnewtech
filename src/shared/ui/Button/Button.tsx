import { cn } from 'shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

type ButtonProps = {
    className?: string;
    theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
    className, theme, children, ...rest
}) => (
    <button
        type="button"
        className={cn(s.Button, {}, [className, s[theme]])}
        {...rest}
    >
        {children}
    </button>
);
