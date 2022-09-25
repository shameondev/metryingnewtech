import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('AboutPage')

    return (
        <h1>
            {t('title')}
        </h1>
    );
};

export default AboutPage;