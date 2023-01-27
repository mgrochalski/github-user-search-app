import styles from './BioBadge.module.scss';
import LocationImg from 'src/images/icon-location.svg';
import WebsiteImg from 'src/images/icon-website.svg';
import TwitterImg from 'src/images/icon-twitter.svg';
import CompanyImg from 'src/images/icon-company.svg';

const options = {
    location: {
        img: LocationImg,
        alt: 'location',
        isLink: false,
    },
    website: {
        img: WebsiteImg,
        alt: 'website',
        isLink: true,
    },
    twitter: {
        img: TwitterImg,
        alt: 'twitter',
        isLink: false,
    },
    company: {
        img: CompanyImg,
        alt: 'company',
        isLink: false,
    }
}

const BioBadge = ({type, value}) => {
    const getText = () => {
        if (!value) {
            return 'Not available';
        }

        if (type.isLink) {
            return <a href={value} target='_blank' rel="noreferrer" >{value}</a>;
        }

        return value;
    }

    const notAvailable = !!value ? '' : styles.notAvailable;

    return (
        <div className={`${styles.main} ${notAvailable}`}>
            <img src={type.img} alt={type.alt} className={styles.img}/>
            {getText()}
        </div>
    );

};

export {BioBadge, options};