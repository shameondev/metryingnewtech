import { cn } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import s from './PageError.module.scss';

type PageErrorProps = {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cn(s.PageError, {}, [className])}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
