import React from 'react';
import PropTypes from 'prop-types';
import styles from './namecard-module.css';

const NameCard = ( { name, email, telephone, imageUrl }) => {

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.image}`}>
                <img src={imageUrl} alt="namecard" />
            </div>

            <div className={`${styles.info}`}>
                <div className={`${styles.section}`}>
                    <div className={`${styles.field}`}>Name</div>
                    <div>{name}</div>
                </div>
                <div className={`${styles.section}`}>
                    <div className={`${styles.field}`}>Email</div>
                    <div>{email}</div>
                </div>
                <div className={`${styles.section}`}>
                    <div className={`${styles.field}`}>Telephone</div>
                    <div>{telephone}</div>
                </div>
            </div>
        </div>
    );
};


NameCard.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    imageUrl: PropTypes.string
};

NameCard.defaultProps = {
    name: "Name",
    email: "Email",
    telephone: "588-5522",
    imageUrl: "http://laoblogger.com/images/nicholas-cage-clipart-7.jpg"
};

export default NameCard;