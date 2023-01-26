import styles from './BioBadge.module.scss';
import LocationImg from 'src/images/icon-location.svg';
import WebsiteImg from 'src/images/icon-website.svg';
import TwitterImg from 'src/images/icon-twitter.svg';
import CompanyImg from 'src/images/icon-company.svg';

const options = {
    location: {
        img: LocationImg,
        alt: 'location',
    },
    website: {
        img: WebsiteImg,
        alt: 'website',
    },
    twitter: {
        img: TwitterImg,
        alt: 'twitter',
    },
    company: {
        img: CompanyImg,
        alt: 'company',
    }
}

const BioBadge = ({type, value}) => {
    const text = !!value ? value : 'Not available';

    return (
        <div className={styles.main}>
            <img src={type.img} alt={type.alt} className={styles.img}/>
            {text}
        </div>
    );

};

export {BioBadge, options};