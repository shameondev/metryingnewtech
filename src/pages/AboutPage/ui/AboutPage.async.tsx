import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    // Так делать в проде не нужно!!!
    // это для теста подгрузки чанков
    setTimeout(() => res(import('./AboutPage')), 1500)
}));