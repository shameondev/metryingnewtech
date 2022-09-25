import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('MainPage');

    return (
        <h1>
            {t('title')}
        </h1>
    );
};

export default MainPage;
