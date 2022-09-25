import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    path={path}
                    element={(<div className="page-wrapper">{element}</div>)}
                    key={path}
                />
            ))}
        </Routes>
    </Suspense>
);
