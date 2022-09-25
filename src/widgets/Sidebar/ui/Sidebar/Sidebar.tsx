import {cn} from "shared/lib/classNames";
import s from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

type SidebarProps = {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={cn(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={s.switchers}>
                <ThemeSwitcher className={s.switcher}/>
                <LangSwitcher className={s.lang}/>
            </div>
        </div>
    );
};