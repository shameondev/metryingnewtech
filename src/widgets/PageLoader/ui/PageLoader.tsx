import { cn } from 'shared/lib/classNames';
import { RunningLoader } from 'shared/ui/RunningLoader';
import s from './PageLoader.module.scss';

type PageLoaderProps = {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={cn(s.PageLoader, {}, [className])}>
        <RunningLoader />
    </div>
);
