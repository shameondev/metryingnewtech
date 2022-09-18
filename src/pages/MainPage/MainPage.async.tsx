import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    // Так делать в проде не нужно!!!
    // это для теста подгрузки чанков
    setTimeout(() => res(import('./MainPage')), 1500)
}));