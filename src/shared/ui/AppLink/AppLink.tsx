import {Link, LinkProps} from "react-router-dom";
import {cn} from "shared/lib/classNames";
import s from './AppLink.module.scss';
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type AppLinkProps = {
    className?: string
    theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = ({className, to, theme = AppLinkTheme.PRIMARY, children, ...rest}) => {
    return (
        <Link className={cn(s.AppLink, {}, [className, s[theme]])} to={to} {...rest}>
            {children}
        </Link>
    );
};