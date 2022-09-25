import { cn } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import s from './NotFoundPage.module.scss';

type NotFoundPageProps = {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={cn(s.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
