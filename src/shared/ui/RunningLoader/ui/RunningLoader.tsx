import { cn } from 'shared/lib/classNames';
import './RunningLoader.scss';

type RunningLoaderProps = {
    className?: string
}

export const RunningLoader = ({ className }: RunningLoaderProps) => (
    <div className={cn('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
