import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "app/config/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route path={path} element={element} key={path}/>
                ))}
            </Routes>
        </Suspense>
    );
};