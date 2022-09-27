import './styles/index.scss';

import { cn } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/RouteProvider/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'shared/lib/hooks/useTheme';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
